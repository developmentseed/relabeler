# Helper to processing Label-Maker files

Scripts  to process `npz` and `geojson` files.

## Converting labels.npz to classification.geojson

```
python to-geo.py <path to>/labels.npz <path to>/classification.geojson
```

## Converting classification.geojson to labels.npz

```
python to-npz.py <path to>/classification.geojson <path to>/labels.npz 
```

## Assigning tileId in classification.geojson

```
node set-tileId.js <path to>/classification.geojson > <path to>/classification-fixed.geojson 
```


## Converting labels.npz to object-detection.geojson

```
python od-to-geo.py <path to>/labels.npz <path to>/object-detection.geojson
```