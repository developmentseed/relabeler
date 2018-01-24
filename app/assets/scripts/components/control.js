'use strict'

import React from 'react'

import { colors } from '../utils/colors'

class Control extends React.Component {
  constructor () {
    super()

    this.save = this.save.bind(this)
    this.reset = this.reset.bind(this)
  }

  render () {
    const classes = [0, 1]
    return (
      <div id="control">
        <h4>Classes</h4>
        <ul id="legend">
        {classes.map((cl, i) => {
          return (
            <li key={cl}>
              <span className="label" style={{backgroundColor: colors[i % 10]}}></span>
              {i === 0 ? 'Background' : `Class ${i}`}
            </li>
          )
        })}
        </ul>
        <h4>Label Opacity</h4>
        <input id="slider" type="range" min={0} max={100} />
        <button onClick={this.save} type="button" name="button">Save</button>
        <button onClick={this.reset} type="button" name="button">Reset</button>
      </div>

    )
  }

  save () {}

  reset () {}
}

export default Control
