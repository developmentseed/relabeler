import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';



// import Toolbar from './Toolbar';
// import FilterTabs from './FilterTabs';
import Map from './Map';

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
  mainContainer: {
    height: 'calc(100vh - 64px)',
    marginTop: '64px'
  }
});

export const Container = (props) => {
  const { classes } = props;
  return (
      <div className={classes.root}>
        <Grid container spacing={0} className={classes.mainContainer}>
          
          <Grid
            item
            xs={12}
            sm={12}
          >
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