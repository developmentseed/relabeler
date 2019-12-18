import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import PropTypes from 'prop-types';
import bbox from '@turf/bbox';
import { saveAs } from 'file-saver';
import { connect } from 'react-redux';
import MapLoadingProgress from './MapLoadingProgress';
import { downloadGeojsonFile } from '../actions/controlAction';
import { selectedFeature } from '../actions/featureActions';
import { setErrorLabelValidate } from '../actions/dataActions';
import { validateTile } from './../utils/validate';
import config from './../config.json';
import { paintLayer, reviewLayer, conflictLayer, activeFeatureLayer } from './Map.style';
class Map extends Component {
  constructor (props) {
    super(props);
    this.state = { loading: true };
    this.onLabelClick = this.onLabelClick.bind(this);
    this.save = this.save.bind(this);
    this.loadExtraStyles = this.loadExtraStyles.bind(this);
    this.toogleLayer = this.toogleLayer.bind(this);
  }

  componentDidMount () {
    // mapboxgl.accessToken = config.accessToken;
    const styleTMS = {
      version: 8,
      sources: {
        'raster-tiles': {
          type: 'raster',
          tiles: config.layers,
          tileSize: 256
        }
      },
      layers: [
        {
          id: 'tmsLayer',
          type: 'raster',
          source: 'raster-tiles',
          minzoom: 0,
          maxzoom: 22
        }
      ]
    };
    const mapConfig = {
      container: this.node,
      style: styleTMS,
      center: [0, 0],
      zoom: 0,
      attributionControl: true,
      hash: true,
      maxZoom: 18
    };
    this.hoverId = 0;
    const map = new mapboxgl.Map(mapConfig);
    const onMapRender = e => {
      if (e.target && e.target.loaded()) {
        this.setState({ loading: false });
      }
    };
    this.onMapRender = onMapRender;
    map.on('render', this.onMapRender);
    map.on('load', () => {
      map.on('click', 'labels', this.onLabelClick);
      this.loadExtraStyles();
    });
    map.on('mouseover', 'labels', function (e) {
      map.getCanvas().style.cursor = e ? 'pointer' : '';
    });
    this.map = map;
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.data && nextProps.currentlabel) {
      this.initLabels(nextProps.data, nextProps.currentlabel, nextProps.opacity);
    }
    if (nextProps.feature) {
      this.updateFeature(nextProps.feature);
      this.activeStyle(nextProps.feature);
    }
    // Download geojso file
    if (nextProps.downloadFile) {
      this.save();
      this.props.dispatch(downloadGeojsonFile(false));
    }
    this.toogleLayer(nextProps.revLayer, nextProps.valLayer);
  }

  toogleLayer (revLayer, valLayer) {
    if (this.map.getLayer('conflictLayer')) {
      valLayer ? this.map.setLayoutProperty('conflictLayer', 'visibility', 'visible') : this.map.setLayoutProperty('conflictLayer', 'visibility', 'none');
    }
    if (this.map.getLayer('reviewLayer')) {
      revLayer ? this.map.setLayoutProperty('reviewLayer', 'visibility', 'visible') : this.map.setLayoutProperty('reviewLayer', 'visibility', 'none');
      // if (revLayer) {
      //   this.map.setLayoutProperty('reviewLayer', 'line-color', ['match', ['get', 'status'], 'no', '#30ff07', 'yes', '#30ff07', 'white']);
      //   this.map.setLayoutProperty('reviewLayer', 'line-gap-width', ['match', ['get', 'status'], 'no', 6, 'yes', 6, 0]);
      // } else {
      //   this.map.setLayoutProperty('reviewLayer', 'line-color', 'white');
      //   this.map.setLayoutProperty('reviewLayer', 'line-gap-width', '0');
      // }
    }
  }

  updateFeature (feature) {
    const data = this.props.data;
    let confictLabel = 0;
    data.features = this.props.data.features.map(f => {
      if (f.properties.index === feature.properties.index) {
        f.properties = Object.assign({}, feature.properties);
      }
      if (f.properties.conflict === 'yes') {
        confictLabel++;
      }

      return f;
    });
    this.map.getSource('labels').setData(data);
    this.props.dispatch(setErrorLabelValidate(confictLabel));
  }

  activeStyle (feature) {
    if (!this.map.getSource('activeFeature')) {
      this.map.addSource('activeFeature', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [feature]
        }
      });
      this.map.addLayer(activeFeatureLayer);
    } else {
      this.map.getSource('activeFeature').setData({
        type: 'FeatureCollection',
        features: [feature]
      });
    }
  }

  onLabelClick (event) {
    // shift the label by one
    const feature = event.features[0];
    const clase = this.props.currentlabel;
    const data = this.props.data;
    data.features = this.props.data.features.map(f => {
      if (f.properties.index === feature.properties.index) {
        f.properties.label[clase.id] = f.properties.label[clase.id] ? 0 : 1;
        f.properties.status = !f.properties.status || f.properties.status === 'no' ? 'yes' : 'no';
        f = validateTile(f);
        this.props.dispatch(selectedFeature(f));
      }
      return f;
    });
    this.map.getSource('labels').setData(data);
  }

  save () {
    if (this.map.getSource('labels')) {
      const data = this.map.getSource('labels')._data;
      const blob = new Blob([JSON.stringify(data)], { type: 'application/json;charset=utf-8' });
      saveAs(blob, this.props.fileName);
    }
  }

  loadExtraStyles () {
    config.classes.forEach(c => {
      if (c.layers.length > 0) {
        this.map.addLayer({
          id: c.name,
          type: 'raster',
          source: {
            type: 'raster',
            tiles: c.layers,
            minzoom: 0,
            maxzoom: 22
          }
        });
        this.map.setLayoutProperty(c.name, 'visibility', 'none');
      }
    });
  }

  initLabels (data, currentlabel, opacity) {
    const filters = [
      ['==', ['number', ['at', currentlabel.id, ['array', ['get', 'label']]]], 1],
      currentlabel.color
    ];
    const fillColors = ['case'].concat(filters).concat(['black']);

    /**
     * Load the layer for first time
     */
    if (!this.map.getSource('labels')) {
      paintLayer.paint['fill-color'] = fillColors;

      /**
       * Set label
       */
      data.features = data.features.map((f, i) => {
        f.properties.index = i;
        f = validateTile(f);
        return f;
      });
      this.map.addSource('labels', {
        type: 'geojson',
        data: data
      });
      const box = bbox(data);
      // zoom to the data
      this.map.fitBounds([[box[0], box[1]], [box[2], box[3]]]);
      this.map.addLayer(paintLayer);
      this.map.addLayer(reviewLayer);
      this.map.addLayer(conflictLayer);
    } else {
      this.map.setPaintProperty('labels', 'fill-color', fillColors);
      this.map.setPaintProperty('labels', 'fill-opacity', opacity / 100);
      this.map.setPaintProperty('reviewLayer', 'line-opacity', opacity / 100);
      this.map.setPaintProperty('conflictLayer', 'line-opacity', opacity / 100);
      // show and hide layers
      config.classes.forEach((c, i) => {
        const layerName = c.name;
        if (this.map.getLayer(layerName)) {
          this.map.setLayoutProperty(layerName, 'visibility', 'none');
          if (currentlabel.id === i) {
            this.map.setLayoutProperty(layerName, 'visibility', 'visible');
          }
        }
      });
    }
  }

  render () {
    const { loading } = this.state;
    const style = {
      position: 'absolute',
      top: 0,
      rigt: 0,
      left: 0,
      zIndex: 99,
      bottom: 0,
      width: '100%',
      overflow: 'hidden'
    };

    return (
      <React.Fragment>
        <div id='map' style={style} ref={c => (this.node = c)} />
        <MapLoadingProgress loading={loading} />
      </React.Fragment>
    );
  }
}

Map.propTypes = {
  data: PropTypes.object,
  currentlabel: PropTypes.object,
  feature: PropTypes.object,
  opacity: PropTypes.number,
  downloadFile: PropTypes.bool,
  dispatch: PropTypes.func,
  revLayer: PropTypes.bool,
  valLayer: PropTypes.bool,
  fileName: PropTypes.string
};

const mapStateToProps = state => ({
  data: state.geojsonData.data,
  loading: state.geojsonData.loading,
  error: state.geojsonData.error,
  labels: state.geojsonData.labels,
  currentlabel: state.geojsonData.label,
  opacity: state.control.opacity,
  downloadFile: state.control.downloadFile,
  feature: state.tile.feature,
  revLayer: state.control.revLayer,
  valLayer: state.control.valLayer,
  fileName: state.geojsonData.fileName
});

export default connect(mapStateToProps)(Map);
