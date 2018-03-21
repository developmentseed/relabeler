/* global mapboxgl */
'use strict'
import React from 'react'
import flatten from 'lodash.flatten'
import debounce from 'lodash.debounce'
import bbox from '@turf/bbox'
import {KNNImageClassifier} from 'deeplearn-knn-image-classifier'
import * as dl from 'deeplearn'
import shuffle from 'shuffle-array'

import config from '../config'
import { colors } from '../utils/colors'
import { updatePredictReady } from '../actions'

// Number of classes to classify
const NUM_CLASSES = 3
// Webcam Image size. Must be 227.
const IMAGE_SIZE = 227
// K value for KNN
const TOPK = 10
const ACCESS_TOKEN = 'pk.eyJ1IjoiZGV2c2VlZCIsImEiOiJnUi1mbkVvIn0.018aLhX0Mb0tdtaT2QNe2Q'

class Map extends React.Component {
  constructor () {
    super()

    this.updateOpacity = this.updateOpacity.bind(this)
    this.onLabelClick = this.onLabelClick.bind(this)
    this.initLabels = this.initLabels.bind(this)
    this.loadDataToModel = this.loadDataToModel.bind(this)
    this.predictAll = this.predictAll.bind(this)
    this.updateMap = debounce(this.updateMap.bind(this), 500)

    // Initiate deeplearn.js math and knn classifier objects
    this.knn = new KNNImageClassifier(NUM_CLASSES, TOPK)

    // Load knn model
    this.knn.load()
    .then(() => {
      this.loadDataToModel(this.mapData.features, this.predictAll)
    })
  }

  initMap (el) {
    if (!this.map) {
      mapboxgl.accessToken = config.mbToken
      const map = this.map = new mapboxgl.Map({
        center: [0, 0],
        container: el,
        style: 'mapbox://styles/mapbox/satellite-streets-v9',
        zoom: 5,
        pitchWithRotate: false,
        dragRotate: false
      })
      map.on('load', () => {
        map.on('click', 'labels', this.onLabelClick)
      })
    }
  }

  componentWillReceiveProps (nextProps) {
    if (!this.mapData && nextProps.labels) {
      this.initLabels(nextProps.labels, nextProps.classes)
    }
    if (nextProps.sliderValue !== this.props.sliderValue) {
      this.updateOpacity(nextProps.sliderValue)
    }
  }

  render () {
    return (
      <div id='map' ref={this.initMap.bind(this)}></div>
    )
  }

  initLabels (labels, classes) {
    this.mapData = labels
    this.props.onDataReady(this.mapData, this.predictAll)
    // define the colors
    const filters = flatten(classes.map((cl, i) => {
      return [
        ['==', ['number', ['at', i, ['array', ['get', 'label']]]], 1],
        colors[i % 10]
      ]
    }))
    const fillColors = ['case'].concat(filters).concat(['black'])

    const outline = ['case',
      ['to-boolean', ['get', 'predicted']], 'purple',
      'white'
    ]

    // load the data
    this.map.addSource('labels', {
      type: 'geojson',
      data: labels
    })
    // show the data
    this.map.addLayer({
      'id': 'labels',
      'source': 'labels',
      'type': 'fill',
      'paint': {
        'fill-color': fillColors,
        'fill-outline-color': outline,
        'fill-opacity': 0.5
      }
    })

    const box = bbox(labels)
    // zoom to the data
    this.map.fitBounds([[box[0], box[1]], [box[2], box[3]]])
  }

  updateOpacity (value) {
    this.map.setPaintProperty('labels', 'fill-opacity', value)
  }

  // on click, update the data for that tile and re-render
  onLabelClick (e) {
    // shift the label by one
    const feature = e.features[0]
    const label = JSON.parse(feature.properties.label)
    const newLabel = [label.pop()].concat(label)

    // assign to the same tile
    const tile = this.mapData.features.find(f => f.properties.tile === feature.properties.tile)
    tile.properties.label = newLabel
    this.map.getSource('labels').setData(this.mapData)
  }

  loadDataToModel (data) {
    Promise.all(shuffle(data).slice(0, 100).map(feature => {
      const [x, y, z] = feature.properties.tile.split('-')
      return fetch(`http://api.mapbox.com/v4/mapbox.satellite/${z}/${x}/${y}.jpg?access_token=${ACCESS_TOKEN}`)
      .then(resp => resp.blob())
      .then(blob => blobToImage(blob))
      .then(img => {
        const image = dl.fromPixels(img)
        const resize = dl.image.resizeBilinear(image, [IMAGE_SIZE, IMAGE_SIZE])
        return this.knn.addImage(resize, feature.properties.label.indexOf(1))
      })
    }))
    .then(() => {
      this.props.dispatch(updatePredictReady(true))
    })
  }

  predictAll () {
    this.mapData.features.forEach(feature => {
      const [x, y, z] = feature.properties.tile.split('-')
      return fetch(`http://api.mapbox.com/v4/mapbox.satellite/${z}/${x}/${y}.jpg?access_token=${ACCESS_TOKEN}`)
      .then(resp => resp.blob())
      .then(blob => blobToImage(blob))
      .then(img => {
        const image = dl.fromPixels(img)
        const resize = dl.image.resizeBilinear(image, [IMAGE_SIZE, IMAGE_SIZE])

        return this.knn.predictClass(resize)
      })
      .then(prediction => {
        const label = [0, 0]
        label[prediction.classIndex] = 1
        feature.properties.label = label
        feature.properties.predicted = true
        this.updateMap()
      })
    })
  }

  updateMap () {
    this.map.getSource('labels').setData(this.mapData)
  }
}

function blobToImage (blob) {
  return new Promise(resolve => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.src = URL.createObjectURL(blob)
  })
}

export default Map
