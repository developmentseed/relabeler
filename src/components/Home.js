import React, { Component } from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Header from './Header';
import styles from './../style/HomeStyles';
import Map from './Map';
import Sidebar from './Sidebar';
import { fetchDataURL } from './../actions/dataActions';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { open: true };
    const url = window.location.href.split('?url=')[1];
    this.props.dispatch(fetchDataURL(url));
  }

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

const mapStateToProps = state => ({});

export default compose(
  connect(mapStateToProps),
  withStyles(styles)
)(Home);
