import React from 'react';
import ReactDOM from 'react-dom';
import KpMart from './kpmart';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<KpMart />, div);
  ReactDOM.unmountComponentAtNode(div);
});
