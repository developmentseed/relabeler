import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { setLabel } from '../actions/dataActions';
import Divider from '@material-ui/core/Divider';
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
    width: '40px',
    textAlign: 'center',
    alignItems: 'center',
    color: '#808080'
  }
});

class Sidebar extends Component {
  choseLabel = (label, id) => {
    this.props.dispatch(setLabel(label));
  };

  render() {
    const { classes, labels, currentlabel } = this.props;
    return (
      <div>
        <MenuList>
          {labels.map((label, id) => {
            return (
              <div>
                <MenuItem
                  selected={label.id === currentlabel.id}
                  key={id}
                  onClick={() => {
                    this.choseLabel(label, id);
                  }}
                  style={{ paddingBottom: '2px', paddingTop: '2px' }}
                >
                  <Grid item xs={12}>
                    <Grid container justify="center">
                      <Grid item xs={6}>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                          {label.class}
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <span
                          style={{ background: label.color }}
                          className={classes.legendSpan}
                        ></span>
                      </Grid>
                    </Grid>
                  </Grid>
                </MenuItem>
                <Divider />
              </div>
            );
          })}
        </MenuList>
        <CardActions>{labels.length > 0 ? <Slider /> : null}</CardActions>
        {labels.length === 0 ? <Loadfile /> : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  labels: state.geojsonData.labels,
  currentlabel: state.geojsonData.label
});

export default compose(
  connect(mapStateToProps),
  withStyles(styles)
)(Sidebar);
