import React, { Component } from 'react';
import template from './converterView';

class ConverterController extends Component {
  constructor (args) {
    super(args);
  }

  render () {
    return template(this);
  }
}

export default ConverterController;
