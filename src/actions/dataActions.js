import { colors } from '../utils/colors';
import { validateFileName } from '../utils/validate';

export const FETCH_DATA_BEGIN = 'FETCH_DATA_BEGIN';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const SET_LABEL = 'SET_LABEL';
export const UPDATE_DATA = 'UPDATE_DATA';
export const SET_FILE_NAME = 'SET_FILE_NAME';
export const SET_ERROR_LABEL = 'SET_ERROR_LABEL';

export const fetchDataBegin = () => ({
  type: FETCH_DATA_BEGIN
});

export const fetchDataSuccess = (fData, labels, label) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: { fData, labels, label }
  };
};

export const fetchDataFailure = error => ({
  type: FETCH_DATA_FAILURE,
  payload: { error }
});

export const setLabel = label => ({
  type: SET_LABEL,
  payload: { label }
});
export const setFileName = fileName => ({
  type: SET_FILE_NAME,
  payload: { fileName }
});
export const setErrorLabel = errorLabel => ({
  type: SET_ERROR_LABEL,
  payload: { errorLabel }
});
export const updateData = fData => {
  return {
    type: UPDATE_DATA,
    payload: { fData }
  };
};

export function fetchData (files) {
  return dispatch => {
    dispatch(fetchDataBegin());
    const fileReader = new FileReader();
    fileReader.onload = function (e) {
      const geojson = JSON.parse(fileReader.result);
      // Get labels from the source
      const labels = geojson.features[0].properties.label.map((lab, i) => {
        return {
          id: i,
          class: `Class ${i + 1}`,
          color: colors[i % 10]
        };
      });

      dispatch(fetchDataSuccess(geojson, labels, labels[0]));
    };
    fileReader.readAsText(files[0]);
    dispatch(setFileName(validateFileName(files[0].name)));
  };
}

export function fetchDataURL (url) {
  return dispatch => {
    dispatch(fetchDataBegin());
    return fetch(url)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        // Get labels from the source
        const labels = json.features[0].properties.label.map((lab, i) => {
          return {
            id: i,
            class: `Class ${i + 1}`,
            color: colors[i % 10]
          };
        });
        dispatch(fetchDataSuccess(json, labels, labels[0]));
        return json;
      })
      .catch(error => dispatch(fetchDataFailure(error)));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors (response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
