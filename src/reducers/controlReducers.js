import { CHANGE_OPACITY, DOWNLOAD_FILE } from '../actions/controlAction';

const initialState = {
  opacity: 50,
  downloadFile: false
};

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_OPACITY:
      return {
        ...state,
        opacity: action.payload.opacity
      };
    case DOWNLOAD_FILE:
      return {
        ...state,
        downloadFile: action.payload.download
      };
    default:
      return state;
  }
}
