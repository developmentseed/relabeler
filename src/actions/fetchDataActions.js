export const FETCH_DATA_BEGIN = "FETCH_DATA_BEGIN";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const fetchDataBegin = () => ({
    type: FETCH_DATA_BEGIN
});

export const fetchDataSuccess = fData => {
   return {
    type: FETCH_DATA_SUCCESS,
    payload: { fData }
}
};

export const fetchDataFailure = error => ({
    type: FETCH_DATA_FAILURE,
    payload: { error }
});

export function fetchData(files) {

    return dispatch => {
        dispatch(fetchDataBegin());

        const fileReader = new FileReader();
         fileReader.onload = function (e) {
            const geojson = JSON.parse(fileReader.result);
            console.log('------------------------------------');
            console.log(geojson);
            console.log('------------------------------------');
            dispatch(fetchDataSuccess(geojson));
            // return geojson;
        };
        fileReader.readAsText(files[0]);
        // return null;
    };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}
