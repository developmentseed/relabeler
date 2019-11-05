export const SELECTED_FEATURE = 'SELECTED_FEATURE';

export const selectedFeature = (feature) => {
  return {
    type: SELECTED_FEATURE,
    payload: { feature }
  };
};
