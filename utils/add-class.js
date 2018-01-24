const fs = require('')

const geo = JSON.parse(fs.readFileSync('labels.geojson'))

geo.features.forEach(feature => {
  feature.properties.label.push(0)
})

fs.writeFileSync('labels-add.geojson', JSON.stringify(geo))
