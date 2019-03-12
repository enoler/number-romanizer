import { Component } from 'react';
import template from './converterView';
import ConverterService from './converterService';

class ConverterController extends Component {
  constructor (args) {
    super(args);
    this.converterService = new ConverterService();
  }

  convert (number) {
    return this.converterService.getRomanNumber(number);
  }

  render () {
    return template(this);
  }
}

export default ConverterController;
