/* global mapboxgl */
'use strict'
import React from 'react'

import config from '../config'

class Map extends React.Component {
  initMap (el) {
    mapboxgl.accessToken = config.mbToken
    this.map = new mapboxgl.Map({
      center: [0, 0],
      container: el,
      style: 'mapbox://styles/mapbox/satellite-streets-v9',
      zoom: 5,
      pitchWithRotate: false,
      dragRotate: false
    })
    this.map.on('load', () => {
      // pass
    })
  }

  componentWillReceiveProps (nextProps) {

  }

  render () {
    return (
      <div id='map' ref={this.initMap.bind(this)}></div>
    )
  }
}

export default Map
