from os import path as op
import numpy as np
import json
from geojson import Feature, FeatureCollection as fc
from mercantile import tiles, feature, Tile

labels = np.load('labels.npz')
features = []
for tile in labels.files:
    label = labels[tile]
    feat = feature(Tile(*[int(t) for t in tile.split('-')]))
    features.append(Feature(geometry=feat['geometry'],
                    properties=dict(label=label.tolist(), tile=tile)))
json.dump(fc(features), open('classification.geojson', 'w'))
