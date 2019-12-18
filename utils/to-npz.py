import numpy as np
import sys
import json

geo = json.load(open(sys.argv[1], 'r'))
tiles = { f['properties']['tile']: f['properties']['label'] for f in geo['features']}
np.savez(sys.argv[2], **tiles)
