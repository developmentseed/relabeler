/* global mapboxgl */
'use strict'
import React from 'react'

import config from '../config'

class Map extends React.Component {
  constructor () {
    super()

    this.updateOpacity = this.updateOpacity.bind(this)
  }

  initMap (el) {
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
     // const filters = _.flatten(classes.map((cl, i) => {
     //   return [
     //     ['==', ['number', ['at', i, ['array', ['get', 'label']]]], 1],
     //     colors[i % 10]
     //   ]
     // }))
     // const fillColors = ['case'].concat(filters).concat(['black'])
     //
     //
     // var bbox = turf.bbox(data)
     // // zoom to the data
     // map.fitBounds([[bbox[0], bbox[1]], [bbox[2], bbox[3]]])
     // // load the data
     // map.addSource('labels', {
     //   type: 'geojson',
     //   data
     // })
     // // show the data
     // map.addLayer({
     //   'id': 'labels',
     //   'source': 'labels',
     //   'type': 'fill',
     //   'paint': {
     //     'fill-color': fillColors,
     //     'fill-outline-color': 'white',
     //     'fill-opacity': 0.5
     //   }
     // })

     // map events
     // on click, update the data for that tile and re-render
     // map.on('click', 'labels', (e) => {
     //   const feature = e.features[0]
     //   const label = JSON.parse(feature.properties.label)
     //   // shift the label by one
     //   const newLabel = [label.pop()].concat(label)
     //   data.features[feature.id].properties.label = newLabel
     //   map.getSource('labels').setData(data)
     // })
    })
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.sliderValue !== this.props.sliderValue) {
      this.updateOpacity(nextProps.sliderValue)
    }
  }

  render () {
    return (
      <div id='map' ref={this.initMap.bind(this)}></div>
    )
  }

  updateOpacity (value) {
    this.map.setPaintProperty('labels', 'fill-opacity', value)
  }
}

export default Map
