import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import bbox from '@turf/bbox';
import { saveAs } from 'file-saver';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MapLoadingProgress from './MapLoadingProgress';
import { downloadGeojsonFile } from '../actions/controlAction';
import config from './../config.json';
class Map extends Component {
  constructor (props) {
    super(props);
    this.state = { loading: true };
    this.onLabelClick = this.onLabelClick.bind(this);
    this.save = this.save.bind(this);
    this.loadExtraStyles = this.loadExtraStyles.bind(this);
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
      attributionControl: true
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

    // Download geojso file
    if (nextProps.downloadFile) {
      this.save();
      this.props.dispatch(downloadGeojsonFile(false));
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
      }
      return f;
    });
    this.map.getSource('labels').setData(data);
  }

  save () {
    const data = this.map.getSource('labels')._data;
    const blob = new Blob([JSON.stringify(data)], { type: 'application/json;charset=utf-8' });
    saveAs(blob, 'labels.geojson');
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
      const paintLayer = {
        id: 'labels',
        source: 'labels',
        type: 'fill',
        paint: {
          'fill-color': fillColors,
          'fill-opacity': opacity / 100
        }
      };

      const lineLayer = {
        id: 'labels-line',
        source: 'labels',
        type: 'line',
        paint: {
          'line-width': ['match', ['get', 'status'], 'no', 4, 'yes', 4, 1],
          'line-color': ['match', ['get', 'status'], 'no', '#ff0000', 'yes', '#ff0000', 'white'],
          'line-opacity': opacity / 100
        }
      };

      /**
       * Set label
       */
      data.features = data.features.map((f, i) => {
        f.properties.index = i;
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
      this.map.addLayer(lineLayer);
    } else {
      this.map.setPaintProperty('labels', 'fill-color', fillColors);
      this.map.setPaintProperty('labels', 'fill-opacity', opacity / 100);
      this.map.setPaintProperty('labels-line', 'line-opacity', opacity / 100);
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
  opacity: PropTypes.number,
  downloadFile: PropTypes.bool,
  dispatch: PropTypes.func
};

const mapStateToProps = state => ({
  data: state.geojsonData.data,
  loading: state.geojsonData.loading,
  error: state.geojsonData.error,
  labels: state.geojsonData.labels,
  currentlabel: state.geojsonData.label,
  opacity: state.control.opacity,
  downloadFile: state.control.downloadFile
});

export default connect(mapStateToProps)(Map);
