import { combineReducers } from 'redux';
import geojsonData from './dataReducer';
import control from './controlReducers';

export default combineReducers({
  geojsonData,
  control
});
