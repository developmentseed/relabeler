import numpy as np
import json

geo = json.load(open('labels-modified.geojson', 'r'))
tiles = {f['properties']['tile']: f['properties']['label']
         for f in geo['features']}
np.savez('labels.npz', **tiles)
