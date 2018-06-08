import os
import sys
import json

from flask import Flask, request
from flask_cors import CORS

from rio_tiler import main, utils
from io import BytesIO
import rasterio


app = Flask(__name__)
CORS(app)

# serve a raster file like `python server.py raster.{vrt,tiff}`

@app.route('/<int:z>/<int:x>/<int:y>.png')
def get_tile(z, x, y):
    tile, mask = main.tile(os.getenv('RASTER_SRC'), x, y, z, None, tilesize=256, nodata=None, alpha=None)
    tile = utils.array_to_img(tile, mask=mask)
    out = BytesIO()
    tile.save(out, format='png')
    contents = out.getvalue()
    out.close()
    return contents, 200, {'Content-Type': 'image/png'}

@app.route('/tile.json')
def get_tilejson():
    with rasterio.open(os.getenv('RASTER_SRC')) as src:
        contents = json.dumps({
          'bounds': src.bounds,
          'tiles': [
              '%s{z}/{x}/{y}.png' % request.url_root
          ]
        })
        return contents, 200, {'Content-Type': 'application/json'}


if __name__ == '__main__':
    app.run()
