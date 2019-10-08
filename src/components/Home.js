import React, { Component } from 'react';
import { connect } from 'react-redux';
import clsx from 'clsx';
import { withStyles } from '@material-ui/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import amber from '@material-ui/core/colors/amber';
import Header from './Header';
import styles from './../style/HomeStyles';
import Map from './Map';
import FileLoader from './Loadfile';
// import Header from './Header';
import Sidebar from './Sidebar';

class Home extends Component {
  state = {
    open: true
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };
  render() {
    // const open =true;
    const { classes } = this.props;
    const { open } = this.state;
    return (
      <div className={classes.root}>
        <Header handleDrawerOpen={this.handleDrawerOpen} open={open} />
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <Typography gutterBottom component="h3">
              {'Classes'}
            </Typography>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <Sidebar />
        </Drawer>
        <Map className={clsx(classes.content)} />
      </div>
    );
  }
}

export default withStyles(styles)(Home);
