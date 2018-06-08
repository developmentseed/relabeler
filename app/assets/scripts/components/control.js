'use strict'

import React from 'react'
import c from 'classnames'
import { saveAs } from 'file-saver'

import { updateSlider, updateTileUrl } from '../actions'
import { colors } from '../utils/colors'

class Control extends React.Component {
  constructor () {
    super()

    this.slide = this.slide.bind(this)
    this.updateTileUrl = this.updateTileUrl.bind(this)
  }

  render () {
    const { tileUrl } = this.props
    return (
      <section className='panel' id='control'>
        <header className='panel__header'>
          <div className='panel__headline'>
            <h1 className='panel__title'>Chip Checker</h1>
            <p className='panel__subtitle'>Curate Machine Learning Labels</p>
          </div>
        </header>
        <div className='panel__body'>
          <div className='panel__body-inner'>
            <h4>Imagery</h4>
              <input onChange={this.updateTileUrl} id='tileUrl' type='input' value={tileUrl}/>
            <h4>Label Opacity</h4>
            <input onChange={this.slide} id='slider' type='range' min={0} max={100} />
          </div>
        </div>
        <footer className='panel__footer'>
          <a onClick={this.upload} className='actions__menu-item action-upload' title='Upload' href='#'><span>Upload</span></a>
          <a onClick={this.save} className='actions__menu-item action-download' title='Save' href='#'><span>Save</span></a>
        </footer>
      </section>
    )
  }

  slide (e) {
    this.props.dispatch(updateSlider(e.target.valueAsNumber / 100))
  }

  updateTileUrl (e) {
    this.props.dispatch(updateTileUrl(e.value))
  }
}

export default Control
