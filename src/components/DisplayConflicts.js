import React, { Component } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import ErrorIcon from '@material-ui/icons/Error';
import DoneIcon from '@material-ui/icons/Done';
import config from './../config.json';

class DisplayConflicts extends Component {
  handleDelete () {
    alert('You clicked the delete icon.');
  }

  handleClick () {
    alert('You clicked the Chip.');
  }

  render () {
    const { feature, labels } = this.props;
    return (
      <div>
        {
          feature ? feature.properties.conflictType.map(conflict => {
            return (<Chip
              icon={<ErrorIcon />}
              label={config.classes[conflict.index].name || labels[conflict.index]}
              onDelete={this.handleDelete}
              style={{ backgroundColor: labels[conflict.index].color }}
            />);
          }) : null
        }

      </div>
    );
  }
}

const mapStateToProps = state => ({
  feature: state.tile.feature,
  labels: state.geojsonData.labels
});

export default connect(mapStateToProps)(DisplayConflicts);
