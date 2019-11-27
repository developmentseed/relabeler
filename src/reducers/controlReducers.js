import { CHANGE_OPACITY, DOWNLOAD_FILE, REVISION_LAYER, VALIDATION_LAYER } from '../actions/controlAction';

const initialState = {
  opacity: 50,
  downloadFile: false,
  revLayer: true,
  valLayer: true
};

export default function dataReducer (state = initialState, action) {
  switch (action.type) {
    case CHANGE_OPACITY:
      return {
        ...state,
        opacity: action.payload.opacity
      };
    case REVISION_LAYER:
      return {
        ...state,
        revLayer: action.payload.revLayer
      };
    case VALIDATION_LAYER:
      return {
        ...state,
        valLayer: action.payload.valLayer
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
