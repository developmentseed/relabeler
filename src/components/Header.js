import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  sidebar: {
    color: theme.palette.text.secondary,
    display: 'flex',
    flexFlow: 'column',
    height: '100%'
  },
  title: {
    color: '#fff'
  },
  toolbar: {
    background: '#534e4e'
  }
});

export const Header = props => {
  const { classes } = props;
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Relabeler
          <Typography variant="caption" className={classes.title}>
            Updating Machine Learning Labels
          </Typography>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
