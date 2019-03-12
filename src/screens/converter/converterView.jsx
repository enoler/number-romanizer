import React from 'react';
import Form from '../../components/form';

import './converterStyles.css';

export default (controller) => (
  <div className='App-header'>
    <div className='Content'>
      <Form
        onChange={(number) => controller.convert(number)} />
    </div>
  </div>

);
