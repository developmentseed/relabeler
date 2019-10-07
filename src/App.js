import React, { Component } from 'react';
import 'typeface-roboto'; // eslint-disable-line
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';

import Map from './components/Map';
import Header from './components/Header';
import Control from './components/Control';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  mainContainer: {
    height: 'calc(100vh - 64px)'
  }
});

class App extends Component {
  render() {
    const { classes, sliderValue } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <Header />
        <Grid container spacing={0} className={classes.mainContainer}>
          <Control
          // sliderValue={sliderValue}
          // classes={classes}
          // labels={labels}
          />
          <Grid item xs={12} sm={12}>
            <Map />
          </Grid>
        </Grid>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
