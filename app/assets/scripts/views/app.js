'use strict'
import React from 'react'
import { connect } from 'react-redux'

import Map from '../components/map'
import Control from '../components/control'

class App extends React.Component {
  constructor () {
    super()

    this.storeMapData = this.storeMapData.bind(this)
    this.getMapData = this.getMapData.bind(this)
    this.predict = this.predict.bind(this)
  }

  render () {
    const { dispatch, classes, sliderValue, labels, predictReady } = this.props
    return (
      <div>
        <Map
          sliderValue={sliderValue}
          classes={classes}
          labels={labels}
          dispatch={dispatch}
          onDataReady={this.storeMapData}
          />
        <Control
          dispatch={dispatch}
          classes={classes}
          labels={labels}
          getMapData={this.getMapData}
          predictReady={predictReady}
          predict={this.predict}
          />
      </div>
    )
  }

  storeMapData (data, fn) {
    this.mapData = data
    this.predictAll = fn
  }

  getMapData () {
    return this.mapData
  }

  predict () {
    this.predictAll()
  }
}

function mapStateToProps (state) {
  return state
}

module.exports = connect(mapStateToProps)(App)
