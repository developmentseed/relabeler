export const CHANGE_OPACITY = 'CHANGE_OPACITY';
export const changeOpacity = opacity => {
  return {
    type: CHANGE_OPACITY,
    payload: { opacity }
  };
};
