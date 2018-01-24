## Relabeler
- Loads `classification.geojson` from Label Maker
- Shows labels over satellite imagery
- Allows GUI relabeling (save and convert back to `.npz`)
- Seems useful for correcting data errors prior to ML input

![showing relabeler in use](relabeler.gif)

### Use
- Put `labels.geojson` file in this root folder
- Serve via `python -m http.server`
- Saves the output as a randomly named txt file (but it's actually GeoJSON)
- Convert to `.npz` with `python to-npz.py`
