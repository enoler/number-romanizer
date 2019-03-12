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
        <h1>Number Romanizer</h1>
        <Form.Group controlId='formInputInteger'>
          <Form.Label>Please introduce an integer number:</Form.Label>
          <Form.Control
            size='lg'
            type='number'
            placeholder='1-3999'
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
