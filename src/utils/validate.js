
export function validateTile (feature) {
  const val0 = feature.properties.label.filter(l => l === 0).length;
  const val1 = feature.properties.label.map((l, i) => { return l === 1 ? { index: i } : null; }).filter(v => v !== null);

  if (feature.properties.label.length === val0) {
    feature.properties.conflict = 'yes';
    feature.properties.conflictType = '0';
  } else if (val1.length > 1) {
    feature.properties.conflict = 'yes';
    feature.properties.conflictType = val1;
  }
  console.log('------------------------------------');
  console.log(feature);
  console.log('------------------------------------');
  return feature;
}
