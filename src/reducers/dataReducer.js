import {
  FETCH_DATA_BEGIN,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  SET_LABEL,
  UPDATE_DATA
} from '../actions/dataActions';

const initialState = {
  data: {},
  loading: true,
  error: null,
  labels: []
};

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.fData,
        labels: action.payload.labels,
        label: action.payload.label
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        data: {}
      };
    case SET_LABEL:
      return {
        ...state,
        label: action.payload.label
      };
    case UPDATE_DATA:
      return {
        ...state,
        data: action.payload.fData
      };
    default:
      return state;
  }
}
