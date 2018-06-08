from os import path as op
import glob

from affine import Affine
import mercantile
import rasterio
import numpy as np

files = glob.glob('app/assets/data/*.png')

for file in files:
    with rasterio.open(file, 'r') as src:
        tile = op.splitext(op.basename(file))[0]
        bounds = mercantile.xy_bounds(*[int(t) for t in tile.split('-')])

        r, g, b = src.read()
        profile = src.profile

        crs = { 'init': 'epsg:3857' }
        transform = Affine(
            (bounds.right - bounds.left) / 256, 0, bounds.left,
            0, (bounds.bottom - bounds.top) / 256, bounds.top
        )
        driver = 'GTiff'

        profile.update(dtype=rasterio.uint8, compress='lzw', crs=crs, transform=transform, driver=driver)
        with rasterio.open('tif/%s.tif' % tile, 'w', **profile) as dst:
            dst.write(np.stack([r, g, b]))
