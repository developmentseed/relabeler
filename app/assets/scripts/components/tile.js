'use strict'

import React from 'react'
import c from 'classnames'

import config from '../config'
import { updateTile, toggleTile } from '../actions'

function makeUrl (url, tile) {
  const ta = tile.split('-').map(Number)
  return url
    .replace('{z}', ta[2])
    .replace('{x}', ta[0])
    .replace('{y}', ta[1]) + `?access_token=${config.mbToken}`
}

class Tile extends React.Component {
  constructor (props) {
    super(props)

    this.onClick = this.onClick.bind(this)
    this.updateTiles = this.updateTiles.bind(this)
  }

  render () {
    const { tile, tileUrl, active } = this.props
    return <div className={c({ active, good: tile.good, bad: !tile.good })} onClick={this.onClick}>
      <img width={180} height={180} src={`/assets/data/${tile.id}.png`}/>
      <img width={180} height={180} src={makeUrl(tileUrl, tile.id)}/>
      <button onClick={this.updateTiles}>Toggle</button>
    </div>
  }

  onClick () {
    this.props.dispatch(updateTile(this.props.tile.id))
  }

  updateTiles (e) {
    e.preventDefault()
    e.stopPropagation()
    this.props.dispatch(toggleTile(this.props.tile.id))
  }
}

export default Tile
