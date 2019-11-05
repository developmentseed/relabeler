import React, { Component } from 'react';
import { connect } from 'react-redux';

class DisplayConflicts extends Component {
  render () {
    return (
      <div>
        {JSON.stringify(this.props.feature)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  feature: state.tile.feature,
  labels: state.geojsonData.labels
});

export default connect(mapStateToProps)(DisplayConflicts);
