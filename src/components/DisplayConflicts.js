import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Chip, Typography } from '@material-ui/core';
import ErrorIcon from '@material-ui/icons/Error';
import PropTypes from 'prop-types';
import { selectedFeature } from '../actions/featureActions';
import { validateTile } from './../utils/validate';
import config from './../config.json';

class DisplayConflicts extends Component {
  setLabelIn0 (index) {
    let feature = this.props.feature;
    feature.properties.label[index] = 0;
    feature = validateTile(feature);
    this.props.dispatch(selectedFeature(feature));
  }

  render () {
    const { feature, labels } = this.props;
    return (
      <div style={{ width: '210px', margin: '1px' }}>
        <Typography variant='caption' display='block' gutterBottom>
        Labels on the tile
        </Typography>
        {
          feature ? feature.properties.label.map((label, index) => {
            if (label === 1) {
              return (
                <Chip
                  key={`chip-${index}`}
                  icon={<ErrorIcon />}
                  label={config.classes[index].name || labels[index]}
                  onDelete={() => { this.setLabelIn0(index); }}
                  style={{ backgroundColor: labels[index].color }}
                />
              );
            } else {
              return null;
            }
          }) : null
        }
      </div>
    );
  }
}

DisplayConflicts.propTypes = {
  feature: PropTypes.object,
  labels: PropTypes.array,
  dispatch: PropTypes.func
};

const mapStateToProps = state => ({
  feature: state.tile.feature,
  labels: state.geojsonData.labels
});

export default connect(mapStateToProps)(DisplayConflicts);
