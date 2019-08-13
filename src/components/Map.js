/* eslint no-return-assign: 0, camelcase: 0, no-param-reassign: 0, prefer-spread: 0 */
import React, { Component } from "react";
// import PropTypes from 'prop-types';
import { bindActionCreators } from "redux";
import mapboxgl from "mapbox-gl";
// import MapboxDraw from '@mapbox/mapbox-gl-draw';
import MapLoadingProgress from "./MapLoadingProgress";
const accessToken =
  "pk.eyJ1IjoiZGV2c2VlZCIsImEiOiJnUi1mbkVvIn0.018aLhX0Mb0tdtaT2QNe2Q"; // process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }
  componentDidMount() {
    mapboxgl.accessToken = accessToken;
    const mapConfig = {
      container: this.node,
      style: "mapbox://styles/mapbox/dark-v9",
      center: [-103.59179687498357, 40.66995747013945],
      zoom: 3,
      attributionControl: true
    };
    this.hoverId = 0;
    const map = new mapboxgl.Map(mapConfig);
    // this.draw = addDrawControl(map, drawingCompleted);
    map.on("load", () => {});

    const onMapRender = e => {
      if (e.target && e.target.loaded()) {
        this.setState({ loading: false });
      }
    };
    this.onMapRender = onMapRender;
    map.on("render", this.onMapRender);
    this.map = map;
  }

  render() {
    const { loading } = this.state;
    const style = {
      position: "absolute",
      top: 64,
      bottom: 0,
      width: "100%",
      overflow: "hidden"
    };
    return (
      <React.Fragment>
        <div id="map" style={style} ref={c => (this.node = c)} />
        <MapLoadingProgress loading={loading} />
      </React.Fragment>
    );
  }
}

export default Map;
