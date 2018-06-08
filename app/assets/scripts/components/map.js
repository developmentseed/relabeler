/* global mapboxgl */
'use strict'
import React from 'react'
import tilebelt from 'tilebelt'
import centroid from '@turf/centroid'

import config from '../config'
import { updateTile } from '../actions'
import { emptyStyle } from '../utils/map'

class Map extends React.Component {
  constructor () {
    super()

    this.onClick = this.onClick.bind(this)
    this.updateOpacity = this.updateOpacity.bind(this)
  }

  initMap (el) {
    if (!this.map) {
      const map = this.map = new mapboxgl.Map({
        center: [39.1387939453125, -6.719164960283204],
        container: el,
        zoom: 12,
        style: emptyStyle,
        pitchWithRotate: false,
        dragRotate: false
      })
      // window.map = map

      map.on('load', () => {
        map.on('click', this.onClick)
        map.addSource('imagery', {
          type: 'raster',
          tiles: [
            this.props.tileUrl.match('mapbox') ? this.props.tileUrl + `?access_token=${config.mbToken}` : this.props.tileUrl
          ]
        })
        map.addLayer({
          id: 'imagery',
          source: 'imagery',
          type: 'raster'
        })
        map.addSource('labels', {
          type: 'raster',
          tiles: [
            'http://localhost:5000/{z}/{x}/{y}.png'
          ]
        })
        map.addLayer({
          id: 'labels',
          source: 'labels',
          type: 'raster'
        })
        map.addSource('tile', {
          type: 'geojson',
          data: {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'Point',
              coordinates: [0, 0]
            }
          }
        })
        map.addLayer({
          id: 'tile',
          source: 'tile',
          type: 'line',
          paint: {
            'line-color': 'lightblue',
            'line-width': 3
          }
        })
      })
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.tile && nextProps.tile !== this.props.tile) {
      const { tile } = nextProps
      const g = tilebelt.tileToGeoJSON(tile.split('-').map(Number))
      const c = centroid(g)
      this.map.jumpTo({ center: c.geometry.coordinates })
      this.map.getSource('tile').setData(g)
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

  updateOpacity (value) {
    this.map.setPaintProperty('labels', 'raster-opacity', value)
  }

  onClick (e) {
    const tile = tilebelt.pointToTile(e.lngLat.lng, e.lngLat.lat, 16)
      .join('-')
    this.props.dispatch(updateTile(tile))
  }
}

export default Map
