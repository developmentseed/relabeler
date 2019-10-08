import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import { changeOpacity } from './../actions/controlAction';

function ValueLabelComponent(props) {
  const { children, open, value } = props;
  const popperRef = React.useRef(null);
  React.useEffect(() => {
    if (popperRef.current) {
      popperRef.current.update();
    }
  });

  return (
    <Tooltip
      PopperProps={{
        popperRef
      }}
      open={open}
      enterTouchDelay={0}
      placement="top"
      title={value}
    >
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired
};

class SliderComponent extends Component {
  constructor(props) {
    super(props);
    this.changeOpacityControl = this.changeOpacityControl.bind(this);
  }
  changeOpacityControl(event, value) {
    this.props.dispatch(changeOpacity(value));
  }

  render() {
    const { opacity } = this.props;
    return (
      <div style={{ width: '210px', margin: '5px' }}>
        <Typography variant="caption" display="block" gutterBottom>
          Label opacity
        </Typography>
        <Paper style={{ padding: '3px' }}>
          <Slider
            ValueLabelComponent={ValueLabelComponent}
            aria-label="label"
            defaultValue={opacity}
            onChange={this.changeOpacityControl}
          />
        </Paper>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    opacity: state.control.opacity
  };
}
export default connect(mapStateToProps)(SliderComponent);
