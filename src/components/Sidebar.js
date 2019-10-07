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
  card: {
    display: 'absolute',
    minWidth: 200,
    zIndex: 99,
    // top:10
    marginLeft: 5,
    marginTop: 5
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  legendSpan: {
    display: 'block',
    height: '20px',
    width: '30px',
    textAlign: 'center',
    fontSize: '9px',
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
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="body2" component="p">
            {'Classes'}
          </Typography>
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
                        <Grid key={id} item xs={6}>
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
        </CardContent>
        <CardActions>{labels.length > 0 ? <Slider /> : null}</CardActions>
        {labels.length === 0 ? <Loadfile /> : null}
      </Card>
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
