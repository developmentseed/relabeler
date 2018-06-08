'use strict'

import React from 'react'
import { List } from 'react-virtualized'

import Tile from './tile'

class Pane extends React.Component {
  constructor () {
    super()

    // this.slide = this.slide.bind(this)
    this.rowRenderer = this.rowRenderer.bind(this)
  }

  render () {
    const { tiles, tile } = this.props
    const scroll = tiles.map(t => t.id).indexOf(tile)
    return (
      <section className='panel' id='pane'>
        <header className='panel__header'>
          <div className='panel__headline'>
            <h1 className='panel__title'>Tiles {`(${tiles.filter(t => t.good).length} of ${tiles.length} good)`}</h1>
          </div>
        </header>
        <div className='panel__body'>
          <div className='panel__body-inner'>
            <List
              height={window.innerHeight}
              rowCount={tiles.length}
              rowHeight={200}
              width={window.innerWidth * 0.3}
              rowRenderer={this.rowRenderer}
              scrollToIndex={scroll}
              scrollToAlignment='start'
              dummyLengthToTriggerReRender={tiles.filter(t => !t.good).length}
            />
          </div>
        </div>
      </section>
    )
  }

  rowRenderer ({index, isScrolling, isVisible, key, parent, style}) {
    const { tiles, tileUrl, dispatch, tile } = this.props
    const thisTile = tiles[index]
    // console.log('render', thisTile, 'active?', tile === thisTile.id);
    const content = !isVisible
      ? '...'
      : <Tile active={tile === thisTile.id} tile={thisTile} tileUrl={tileUrl} dispatch={dispatch}/>
    return (
      <div key={key} style={style}>
        {content}
      </div>
    )
  }
}

export default Pane
