import React, { Component } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/styles';
import { AppBar, Button, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import styles from '../style/HomeStyles';
import { downloadGeojsonFile } from '../actions/controlAction';

class Header extends Component {
  constructor () {
    super();
    this.downloadFile = this.downloadFile.bind(this);
  }

  downloadFile () {
    this.props.dispatch(downloadGeojsonFile(true));
  }

  render () {
    const { classes, open, handleDrawerOpen } = this.props;
    return (
      <AppBar
        position='fixed'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap>
            Relabeler
          </Typography>
          <Button className={classes.button} color='inherit' onClick={this.downloadFile}>Download</Button>
        </Toolbar>
      </AppBar>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object,
  open: PropTypes.bool,
  handleDrawerOpen: PropTypes.func,
  dispatch: PropTypes.func
};

const mapStateToProps = state => ({
  labels: state.geojsonData.labels,
  currentlabel: state.geojsonData.label
});

export default compose(
  connect(mapStateToProps),
  withStyles(styles)
)(Header);
