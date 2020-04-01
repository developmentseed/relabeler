import numpy as np
from os import path as op
import sys
import numpy as np
import json
from geojson import Feature, FeatureCollection as fc
import affine
import shapely
from shapely import geometry
import mercantile

d = np.load(sys.argv[1])
features = []

for tile in d.files:
    pred = list(d[tile][0][0:4])
    b = mercantile.bounds([int(t) for t in tile.split('-')])

    # Affine Transform to go from pixel bounding box coordinates to geographic coordindates
    width = b[2] - b[0]
    height = b[3] - b[1]
    a = affine.Affine(width / 256, 0.0, b[0], 0.0, (0 - height / 256), b[3])
    a_lst = [a.a, a.b, a.d, a.e, a.xoff, a.yoff]
    geographic_bbox = shapely.affinity.affine_transform(geometry.box(*pred), a_lst)

    features.append(Feature(geometry=geographic_bbox,
                            properties=dict(label=list(d[tile][0]), tile=tile)))
json.dump(fc(features), open(sys.argv[2], 'w'))
