import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  CardActions,
  Typography,
  Grid,
  MenuItem,
  MenuList,
  Divider
} from '@material-ui/core';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { setLabel } from '../actions/dataActions';
import config from './../config.json';
import Loadfile from './Loadfile';
import Slider from './Slider';
import DisplayConflicts from './DisplayConflicts';

const styles = theme => ({
  title: {
    fontSize: 12,
    alignItems: 'center',
    marginTop: '5px'
  },
  legendSpan: {
    display: 'block',
    height: '25px',
    width: '60px',
    textAlign: 'center',
    alignItems: 'center',
    color: '#808080'
  }
});

class Sidebar extends Component {
  constructor () {
    super();
    this.contentEditable = React.createRef();
    this.choseLabel = this.choseLabel.bind(this);
  }

  choseLabel (label, id) {
    this.props.dispatch(setLabel(label));
  }

  render () {
    const { classes, labels, currentlabel } = this.props;
    return (
      <div>
        <MenuList>
          {labels.map((label, id) => (
            <div key={id.toString()}>
              <MenuItem
                selected={label.id === currentlabel.id}
                onClick={() => {
                  this.choseLabel(label, id);
                }}
                style={{ paddingBottom: '2px', paddingTop: '2px' }}
              >
                <Grid item xs={12}>
                  <Grid container justify='center'>
                    <Grid item xs={8}>
                      <Typography
                        className={classes.title}
                        color='textSecondary'
                        gutterBottom
                      >
                        {config.classes[id].name || label.class}
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <span
                        style={{ background: label.color, marginLeft: '5px' }}
                        className={classes.legendSpan}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </MenuItem>
              <Divider />
            </div>
          ))}
        </MenuList>
        {labels.length === 0 ? <Loadfile /> : null}
        <CardActions>
          {labels.length > 0 ? (
            <div>
              <Slider />
            </div>
          ) : null}
        </CardActions>
        <Divider />

        <CardActions>
          <DisplayConflicts />
        </CardActions>
        <Divider />
      </div>
    );
  }
}

Sidebar.propTypes = {
  classes: PropTypes.object,
  dispatch: PropTypes.func,
  labels: PropTypes.object,
  currentlabel: PropTypes.object
};

const mapStateToProps = state => ({
  labels: state.geojsonData.labels,
  currentlabel: state.geojsonData.label
});

export default compose(
  connect(mapStateToProps),
  withStyles(styles)
)(Sidebar);
