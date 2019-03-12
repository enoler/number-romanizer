import React from 'react';
import Form from '../../components/form';

import './converterStyles.css';

export default (controller) => (
  <header className='App-header'>
    <Form
      onChange={(number) => controller.convert(number)} />
  </header>
);
