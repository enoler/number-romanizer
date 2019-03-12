import React, { Component } from 'react';
import {
  Form,
  Button
} from 'react-bootstrap';

export default class FormComponent extends Component {
  constructor (args) {
    super(args);
  }

  render () {
    return (
      <Form>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Integer number</Form.Label>
          <Form.Control type='email' placeholder='Please introduce an integer number' />
        </Form.Group>

        <Form.Group controlId='formBasicChecbox'>
          <Form.Label>{this.props.result ? 'Roman number' : ''}</Form.Label>
          <Form.Text className='text-muted'>
            {this.props.result ? this.props.result : ''}
          </Form.Text>
        </Form.Group>
      </Form>
    );
  }
}
