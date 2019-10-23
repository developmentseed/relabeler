import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { setLabel } from '../actions/dataActions';
import { downloadGeojsonFile } from '../actions/controlAction';
import Divider from '@material-ui/core/Divider';
import config from './../config.json';
import Loadfile from './Loadfile';
import Slider from './Slider';

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
  }

  choseLabel (label, id) {
    this.props.dispatch(setLabel(label));
  }

  downloadFile () {
    this.props.dispatch(downloadGeojsonFile(true));
  }

  render () {
    const { classes, labels, currentlabel } = this.props;
    return (
      <div>
        <MenuList>
          {labels.map((label, id) => {
            return (
              <div key={id}>
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
            );
          })}
        </MenuList>
        {labels.length === 0 ? <Loadfile /> : null}
        <CardActions>
          {labels.length > 0 ? (
            <div>
              <Slider />
              <div style={{ margin: '3px' }}>
                <Button variant='outlined' onClick={this.downloadFile}>
                  Download
                </Button>
              </div>
            </div>
          ) : null}
        </CardActions>
        <Divider />
      </div>
    );
  }
}

Sidebar.propTypes = {
  classes: PropTypes.object
};

const mapStateToProps = state => ({
  labels: state.geojsonData.labels,
  currentlabel: state.geojsonData.label
});

export default compose(
  connect(mapStateToProps),
  withStyles(styles)
)(Sidebar);
