import { CHANGE_OPACITY } from '../actions/controlAction';

const initialState = {
  opacity: 50
};

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_OPACITY:
      return {
        opacity: action.payload.opacity
      };
    default:
      return state;
  }
}
