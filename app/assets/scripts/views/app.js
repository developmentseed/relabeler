'use strict'
import React from 'react'
import { connect } from 'react-redux'

import Map from '../components/map'
import Control from '../components/control'

class App extends React.Component {
  render () {
    const { dispatch, classes, sliderValue, labels } = this.props
    return (
      <div>
        <Map
          sliderValue={sliderValue}
          classes={classes}
          labels={labels}
          />
        <Control
          dispatch={dispatch}
          classes={classes}
          labels={labels}
          />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return state
}

module.exports = connect(mapStateToProps)(App)
