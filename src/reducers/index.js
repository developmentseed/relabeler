import { combineReducers } from 'redux';
import geojsonData from './dataReducer';
import control from './controlReducers';
import tile from './featureReducers';

export default combineReducers({
  geojsonData,
  control,
  tile
});
