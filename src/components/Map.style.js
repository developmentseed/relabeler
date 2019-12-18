export const paintLayer = {
  id: 'labels',
  source: 'labels',
  type: 'fill',
  paint: {
    //   'fill-color': fillColors,
    'fill-opacity': 50 / 100
  }
};

export const reviewLayer = {
  id: 'reviewLayer',
  source: 'labels',
  type: 'line',
  paint: {
    'line-width': ['match', ['get', 'status'], 'no', 1, 'yes', 1, 1],
    'line-color': ['match', ['get', 'status'], 'no', '#30ff07', 'yes', '#30ff07', 'white'],
    'line-gap-width': ['match', ['get', 'status'], 'no', 6, 'yes', 6, 0],
    'line-opacity': 50 / 100
  }
};

export const conflictLayer = {
  id: 'conflictLayer',
  source: 'labels',
  type: 'line',
  paint: {
    'line-width': ['match', ['get', 'conflict'], 'yes', 2, 0],
    'line-color': ['match', ['get', 'conflict'], 'yes', '#ff0000', 'no', 'white', 'white'],
    'line-dasharray': [10, 10],
    'line-opacity': 50 / 100
  }
};

export const activeFeatureLayer = {
  id: 'activeFeature',
  source: 'activeFeature',
  type: 'line',
  paint: {
    'line-width': 2,
    'line-gap-width': 6,
    'line-color': '#ffff00',
    'line-opacity': 0.8
  }
};
