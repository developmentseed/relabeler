export const CHANGE_OPACITY = 'CHANGE_OPACITY';
export const DOWNLOAD_FILE = 'DOWNLOAD_FILE';

export const changeOpacity = opacity => {
  return {
    type: CHANGE_OPACITY,
    payload: { opacity }
  };
};

export const downloadGeojsonFile = download => {
  return {
    type: DOWNLOAD_FILE,
    payload: { download }
  };
};
