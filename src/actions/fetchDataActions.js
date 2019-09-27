import { colors } from './../utils/colors';

export const FETCH_DATA_BEGIN = 'FETCH_DATA_BEGIN';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const fetchDataBegin = () => ({
  type: FETCH_DATA_BEGIN
});

export const fetchDataSuccess = (fData, classes) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: { fData, classes }
  };
};

export const fetchDataFailure = error => ({
  type: FETCH_DATA_FAILURE,
  payload: { error }
});

export function fetchData(files) {
  return dispatch => {
    dispatch(fetchDataBegin());
    const fileReader = new FileReader();
    fileReader.onload = function(e) {
      const geojson = JSON.parse(fileReader.result);

      //Get classes from the source
      const classes = geojson.features[0].properties.label.map((lab, i) => {
        return {
          class: `Class ${i + 1}`,
          color: colors[i % 10]
        };
      });

      dispatch(fetchDataSuccess(geojson, classes));
    };
    fileReader.readAsText(files[0]);
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
