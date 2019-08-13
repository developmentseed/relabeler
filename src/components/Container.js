import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Control from "./Control";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

// import Toolbar from './Toolbar';
// import FilterTabs from './FilterTabs';
import Map from "./Map";
const styles = theme => ({
  root: {
    flexGrow: 1
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  sidebar: {
    color: theme.palette.text.secondary,
    display: "flex",
    flexFlow: "column",
    height: "100%"
  },
  mainContainer: {
    height: "calc(100vh - 64px)"
    // marginTop: '64px'
  },
  title: {
    color:'#fff'
  },
  toolbar:{
    background:'#534e4e',
  }
});

export const Container = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar  className={classes.toolbar}>
          <Typography variant="h5" className={classes.title}>
            Relabeler
            <Typography variant="caption" className={classes.title}>
              Update Machine Learning Labels
            </Typography>
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container spacing={0} className={classes.mainContainer}>
        <Control />
        <Grid item xs={12} sm={12}>
          <Map />
        </Grid>
      </Grid>
    </div>
  );
};

Container.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Container);
