export const CHANGE_OPACITY = 'CHANGE_OPACITY';
export const REVISION_LAYER = 'REVISION_LAYER';
export const VALIDATION_LAYER = 'VALIDATION_LAYER';
export const DOWNLOAD_FILE = 'DOWNLOAD_FILE';

export const changeOpacity = opacity => {
  return {
    type: CHANGE_OPACITY,
    payload: { opacity }
  };
};

export const revisionLayer = revLayer => {
  return {
    type: REVISION_LAYER,
    payload: { revLayer }
  };
};

export const validationLayer = valLayer => {
  return {
    type: VALIDATION_LAYER,
    payload: { valLayer }
  };
};

export const downloadGeojsonFile = download => {
  return {
    type: DOWNLOAD_FILE,
    payload: { download }
  };
};
