import React, { Component } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/styles';
import { AppBar, Button, Toolbar, IconButton, Typography } from '@material-ui/core';
import { Menu, Error } from '@material-ui/icons';
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
    const { classes, open, handleDrawerOpen, fileName, confictLabel } = this.props;
    return (
      <AppBar
        position='fixed'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
        // style={{ margin:'4px'}}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <Menu />
          </IconButton>
          <Typography variant='h6' noWrap>
            Relabeler
          </Typography>
          <Typography variant='subtitle2' className={classes.nameFile}>
            { fileName }
          </Typography>
          <Typography variant='subtitle1' className={classes.confictLabel}>
            {confictLabel > 0 ? `Conflict tiles: ${confictLabel}` : ''}
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
  dispatch: PropTypes.func,
  fileName: PropTypes.string,
  confictLabel: PropTypes.string

};

const mapStateToProps = state => ({
  labels: state.geojsonData.labels,
  currentlabel: state.geojsonData.label,
  fileName: state.geojsonData.fileName,
  confictLabel: state.geojsonData.confictLabel

});

export default compose(
  connect(mapStateToProps),
  withStyles(styles)
)(Header);
