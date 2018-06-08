import { UPDATE_SLIDER, UPDATE_TILE_URL, UPDATE_TILE, TOGGLE_TILE } from '../actions'

const tiles = require('../../tiles').map(tile => {
  return { id: tile, good: true }
})

const initial = {
  sliderValue: 1,
  tileUrl: 'https://api.mapbox.com/v4/mapbox.satellite/{z}/{x}/{y}@2x.png',
  tiles,
  tile: null
}

const reducer = (state = initial, action) => {
  switch (action.type) {
    case UPDATE_SLIDER:
      return Object.assign({}, state, { sliderValue: action.data })
    case UPDATE_TILE_URL:
      return Object.assign({}, state, { tileUrl: action.data })
    case UPDATE_TILE:
      return Object.assign({}, state, { tile: action.data })
    case TOGGLE_TILE:
      const newTiles = JSON.parse(JSON.stringify(state.tiles))
      const index = newTiles.map(t => t.id).indexOf(action.data)
      newTiles[index].good = !newTiles[index].good
      return Object.assign({}, state, { tiles: newTiles })
    default:
      return state
  }
}

export default reducer
