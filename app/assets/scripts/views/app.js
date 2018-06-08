'use strict'
import React from 'react'
import { connect } from 'react-redux'

import Map from '../components/map'
import Control from '../components/control'
import Pane from '../components/pane'

class App extends React.Component {
  constructor () {
    super()

    this.storeMapData = this.storeMapData.bind(this)
    this.getMapData = this.getMapData.bind(this)
  }

  render () {
    const { dispatch, sliderValue, tiles, tileUrl, tile } = this.props
    return (
      <div>
        <Map
          sliderValue={sliderValue}
          onDataReady={this.storeMapData}
          tileUrl={tileUrl}
          tiles={tiles}
          dispatch={dispatch}
          tile={tile}
          />
        <Control
          dispatch={dispatch}
          tileUrl={tileUrl}
          getMapData={this.getMapData}
          />
        <Pane
          tiles={tiles}
          tileUrl={tileUrl}
          tile={tile}
          dispatch={dispatch}
        />
      </div>
    )
  }

  storeMapData (data) {
    this.mapData = data
  }

  getMapData () {
    return this.mapData
  }
}

function mapStateToProps (state) {
  return state
}

module.exports = connect(mapStateToProps)(App)
