const fs = require('fs');
const turf = require('@turf/turf');
const cover = require('@mapbox/tile-cover');
const geojson = JSON.parse(fs.readFileSync(process.argv[2]).toString());
const limits = {
  min_zoom: 18,
  max_zoom: 18
};
geojson.features = geojson.features.map(feature => {
  const tile = cover
    .tiles(turf.centroid(feature).geometry, limits)[0]
    .join('-');
  feature.properties.tile = tile;
  return feature;
});
console.log(JSON.stringify(geojson));