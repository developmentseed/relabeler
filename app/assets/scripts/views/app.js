'use strict'
import React from 'react'
import { connect } from 'react-redux'

import Map from '../components/map'
import Control from '../components/control'

class App extends React.Component {
  render () {
    return (
      <div>
        <Map />
        <Control />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {}
}

module.exports = connect(mapStateToProps)(App)
