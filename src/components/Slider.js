import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import {
  changeOpacity,
  revisionLayer,
  validationLayer
} from './../actions/controlAction';

function ValueLabelComponent (props) {
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
      placement='top'
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
  constructor (props) {
    super(props);
    this.changeOpacityControl = this.changeOpacityControl.bind(this);
    this.toogleRevLayer = this.toogleRevLayer.bind(this);
    this.toogleValLayer = this.toogleValLayer.bind(this);
  }

  changeOpacityControl (event, value) {
    this.props.dispatch(changeOpacity(value));
  }

  toogleRevLayer (value) {
    this.props.dispatch(revisionLayer(!value));
  }

  toogleValLayer (value) {
    this.props.dispatch(validationLayer(!value));
  }

  render () {
    const { opacity, revLayer, valLayer } = this.props;
    return (
      <div style={{ width: '210px', margin: '1px' }}>
        <Typography
          variant='caption'
          display='block'
          gutterBottom
          style={{ marginLeft: '5px' }}
        >
          Label opacity
        </Typography>
        <Paper style={{ padding: '3px' }}>
          <Slider
            ValueLabelComponent={ValueLabelComponent}
            aria-label='label'
            defaultValue={opacity}
            onChange={this.changeOpacityControl}
          />
        </Paper>

        <FormControlLabel
          style={{ marginTop: '10px' }}
          control={
            <Checkbox
              style={{ paddingBottom: '1px', paddingTop: '1px' }}
              checked={revLayer}
              onChange={() => {
                this.toogleRevLayer(revLayer);
              }}
              color='primary'
            />
          }
          label={
            <Typography variant='caption' display='block' gutterBottom>
              Revision layer
            </Typography>
          }
        />
        <FormControlLabel
          control={
            <Checkbox
              style={{ paddingBottom: '1px', paddingTop: '1px' }}
              checked={valLayer}
              onChange={() => {
                this.toogleValLayer(valLayer);
              }}
              color='primary'
            />
          }
          label={
            <Typography variant='caption' display='block' gutterBottom>
              Validation layer
            </Typography>
          }
        />
      </div>
    );
  }
}

SliderComponent.propTypes = {
  dispatch: PropTypes.func,
  opacity: PropTypes.number,
  revLayer: PropTypes.bool,
  valLayer: PropTypes.bool
};

const mapStateToProps = state => ({
  opacity: state.control.opacity,
  revLayer: state.control.revLayer,
  valLayer: state.control.valLayer
});

export default connect(mapStateToProps)(SliderComponent);
