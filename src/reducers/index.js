import { LOAD_FILE } from '../constants';

const initialState = {
  data: {}
};

function loadFile(state = initialState, action) {
  if (action.type === LOAD_FILE) {
    state = Object.assign({}, action.payload);
  }
  return state;
}

export default { loadFile };
