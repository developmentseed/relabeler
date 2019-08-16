import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Loadfile from './Loadfile';
const styles = theme => ({
  card: {
    display: 'absolute',
    minWidth: 200,
    zIndex: 99,
    // top:10
    marginLeft: 5,
    marginTop: 5
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

class Control extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="body2" component="p">
            {'classes'}
          </Typography>
          {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
              Classes
            </Typography>
         
            <Typography className={classes.pos} color="textSecondary">
              adjective
            </Typography> */}
        </CardContent>
        {/* <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions> */}
        <Loadfile />
      </Card>
    );
  }
}

export default withStyles(styles)(Control);
