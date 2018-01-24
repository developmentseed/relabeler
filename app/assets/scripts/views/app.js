'use strict'
import React from 'react'
import { connect } from 'react-redux'

import Map from '../components/map'
import Control from '../components/control'

class App extends React.Component {
  render () {
    const { dispatch } = this.props
    return (
      <div>
        <Map sliderValue={this.props.sliderValue}/>
        <Control dispatch={dispatch} />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    sliderValue: state.sliderValue
  }
}

module.exports = connect(mapStateToProps)(App)
