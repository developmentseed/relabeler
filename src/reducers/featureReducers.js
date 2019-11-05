import { SELECTED_FEATURE } from '../actions/featureActions';

const initialState = {
  feature: null
};

export default function selectedFeature (state = initialState, action) {
  switch (action.type) {
    case SELECTED_FEATURE:
      return {
        ...state,
        feature: Object.assign({}, action.payload.feature)
      };
    default:
      return state;
  }
}
