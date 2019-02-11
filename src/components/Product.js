// Code Product Component Here
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render() {
    return(
      {this.props.name}
      {this.props.producer}
      {this.props.hasWatermark}
      {this.props.color}
      {this.props.weight}
    )
  }
}

Order.defaultProps = {
  hasWatermark: false
}

Order.PropTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.string.isRequired.oneOf(['white','eggshell-white','salmon'])
  weight: PropTypes.number.isRequired.range
};

function range(props, propName, componentName) {
  componentName = comopnentName || 'ANONYMOUS';

  if (props[propName]) {
    let value = props[propName];
    if (typeof value === 'number') {
        return (value >= 80 && value <= 300) ? null : new Error(propName + ' in ' + componentName + " is not within 80 to 300");
    }
  }

  // assume all ok
  return null;
}
