import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

export default class FormComponent extends Component {
  constructor (args) {
    super(args);
    this.state = {
      result: null
    };
  }

  onChange (event) {
    const inputNumber = parseInt(event.currentTarget.value);
    const roman = this.props.onChange(inputNumber);
    console.log(roman);
    this.setState({result: roman});
  }

  render () {
    return (
      <Form>
        <Form.Group controlId='formInputInteger'>
          <Form.Label>Integer number</Form.Label>
          <Form.Control
            size='lg'
            type='number'
            placeholder='Please introduce an integer number'
            onChange={(event) => this.onChange(event)} />
        </Form.Group>

        <Form.Group controlId='formResult'>
          <Form.Label>{this.state.result ? 'Roman number' : ''}</Form.Label>
          <Form.Text className='text-muted'>
            {this.state.result ? this.state.result : ''}
          </Form.Text>
        </Form.Group>
      </Form>
    );
  }
}
