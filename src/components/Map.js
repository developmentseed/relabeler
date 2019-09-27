import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import mapboxgl from 'mapbox-gl';
import bbox from '@turf/bbox'
import flatten from 'lodash.flatten'

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { colors } from './../utils/colors'

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
      style: 'mapbox://styles/mapbox/dark-v9',
      center: [-103.59179687498357, 40.66995747013945],
      zoom: 3,
      attributionControl: true
    };
    this.hoverId = 0;
    const map = new mapboxgl.Map(mapConfig);
    // this.draw = addDrawControl(map, drawingCompleted);
    map.on('load', () => { });
    const onMapRender = e => {
      if (e.target && e.target.loaded()) {
        this.setState({ loading: false });
      }
    };
    this.onMapRender = onMapRender;
    map.on('render', this.onMapRender);
    map.on('load', () => {
      map.on('click', 'labels', this.onLabelClick)
    })

    this.map = map;
  }

  onLabelClick(event) {
    // shift the label by one
    const feature = event.features[0];
    const status = feature.properties.status || 'no';
    const newStatus = (status == 'no') ? 'yes' : 'no';
    let tile = this.props.data.features.find(f => f.properties.tile === feature.properties.tile)
    tile.properties.status = newStatus;
    this.map.getSource('labels').setData(this.props.data)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data) {
      this.initLabels(nextProps.data)
    }
  }

  initLabels(labels) {
    // load the data

    const filters = flatten([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((cl, i) => {
      return [
        ['==', ['number', ['at', i, ['array', ['get', 'label']]]], 1],
        colors[i % 10]
      ]
    }))
    const fillColors = ['case'].concat(filters).concat(['black'])

    this.map.addSource('labels', {
      type: 'geojson',
      data: labels
    });

    // show the data
    this.map.addLayer({
      'id': 'labels',
      'source': 'labels',
      'type': 'fill',
      'paint': {
        'fill-color': fillColors,
        'fill-outline-color': 'white',
        'fill-opacity': 0.5
      }
    });
    const box = bbox(labels)
    // zoom to the data
    this.map.fitBounds([[box[0], box[1]], [box[2], box[3]]])
  }
  render() {
    const { loading } = this.state;
    const style = {
      position: 'absolute',
      top: 64,
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
});

export default connect(mapStateToProps)(Map);
