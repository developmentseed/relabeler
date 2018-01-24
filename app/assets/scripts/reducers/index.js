import { UPDATE_SLIDER } from '../actions'

const initial = {
  sliderValue: 50
}

const reducer = (state = initial, action) => {
  switch (action.type) {
    case UPDATE_SLIDER:
      return Object.assign({}, state, { sliderValue: action.data })
    default:
      return state
  }
}

export default reducer
