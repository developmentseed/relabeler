import React, { Component } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { Drawer, Typography, Divider, IconButton } from '@material-ui/core';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Header from './Header';
import styles from './../style/HomeStyles';
import Map from './Map';
import Sidebar from './Sidebar';
import DisplayConflicts from './DisplayConflicts';

import { fetchDataURL } from './../actions/dataActions';
class Home extends Component {
  constructor (props) {
    super(props);
    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
    this.state = { open: true };
    const url = window.location.href.split('?url=')[1];
    this.props.dispatch(fetchDataURL(url));
  }

  handleDrawerOpen () {
    this.setState({ open: true });
  }

  handleDrawerClose () {
    this.setState({ open: false });
  }

  render () {
    // const open =true;
    const { classes } = this.props;
    const { open } = this.state;
    return (
      <div className={classes.root}>
        <Header handleDrawerOpen={this.handleDrawerOpen} open={open} />
        <Drawer
          className={classes.drawer}
          variant='persistent'
          anchor='left'
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <Typography gutterBottom component='h3'>
              Classes
            </Typography>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <Sidebar />
          <DisplayConflicts />
        </Drawer>
        <Map className={clsx(classes.content)} />
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object,
  dispatch: PropTypes.func
};

const mapStateToProps = state => ({});

export default compose(
  connect(mapStateToProps),
  withStyles(styles)
)(Home);
