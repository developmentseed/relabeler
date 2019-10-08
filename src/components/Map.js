import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import mapboxgl from 'mapbox-gl';
import bbox from '@turf/bbox';
import flatten from 'lodash.flatten';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { colors } from './../utils/colors';
import MapLoadingProgress from './MapLoadingProgress';

const accessToken = 'pk.eyJ1IjoiZGV2c2VlZCIsImEiOiJnUi1mbkVvIn0.018aLhX0Mb0tdtaT2QNe2Q'; // process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
    this.onLabelClick = this.onLabelClick.bind(this);
  }
  componentDidMount() {
    mapboxgl.accessToken = accessToken;
    const mapConfig = {
      container: this.node,
      style: 'mapbox://styles/mapbox/satellite-v9',
      center: [-103.59179687498357, 40.66995747013945],
      zoom: 3,
      attributionControl: true
    };
    this.hoverId = 0;
    const map = new mapboxgl.Map(mapConfig);
    // this.draw = addDrawControl(map, drawingCompleted);
    map.on('load', () => {});
    const onMapRender = e => {
      if (e.target && e.target.loaded()) {
        this.setState({ loading: false });
      }
    };
    this.onMapRender = onMapRender;
    map.on('render', this.onMapRender);
    map.on('load', () => {
      map.on('click', 'labels', this.onLabelClick);
    });
    // map.on('mouseover','labels', function(e) {
    //   map.getCanvas().style.cursor = e ? 'pointer' : '';
    // });
    this.map = map;
  }

  onLabelClick(event) {
    // shift the label by one
    const feature = event.features[0];
    const clase = this.props.currentlabel;
    let data = this.props.data;
    data.features = this.props.data.features.map(f => {
      if (f.properties.index === feature.properties.index) {
        f.properties.label[clase.id] = f.properties.label[clase.id] ? 0 : 1;
      }
      return f;
    });
    // this.props.dispatch(updateData(data));
    this.map.getSource('labels').setData(data);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data && nextProps.currentlabel) {
      this.initLabels(nextProps.data, nextProps.currentlabel, nextProps.opacity);
    }
  }

  initLabels(data, currentlabel, opacity) {
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
          'fill-outline-color': 'white',
          'fill-opacity': opacity / 100
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
    } else {
      // this.map.removeLayer('labels');
      this.map.setPaintProperty('labels', 'fill-color', fillColors);
      this.map.setPaintProperty('labels', 'fill-opacity', opacity / 100);
    }
  }
  render() {
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
        <div id="map" style={style} ref={c => (this.node = c)} />
        <MapLoadingProgress loading={loading} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  data: state.geojsonData.data,
  loading: state.geojsonData.loading,
  error: state.geojsonData.error,
  labels: state.geojsonData.labels,
  currentlabel: state.geojsonData.label,
  opacity: state.control.opacity
});

export default connect(mapStateToProps)(Map);
