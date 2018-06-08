'use strict'

export const UPDATE_SLIDER = 'UPDATE_SLIDER'
export const UPDATE_TILE_URL = 'UPDATE_TILE_URL'
export const UPDATE_TILE = 'UPDATE_TILE'
export const TOGGLE_TILE = 'TOGGLE_TILE'

export function updateSlider (value) {
  return { type: UPDATE_SLIDER, data: value }
}

export function updateTileUrl (data) {
  return { type: UPDATE_TILE_URL, data }
}

export function updateTile (data) {
  return { type: UPDATE_TILE, data }
}

export function toggleTile (data) {
  return { type: TOGGLE_TILE, data }
}
