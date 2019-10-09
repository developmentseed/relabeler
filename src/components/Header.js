import React, { Component } from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import styles from '../style/HomeStyles';

class Header extends Component {
  render() {
    const { classes, open, handleDrawerOpen } = this.props;
    return (
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Relabeler
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Header);
