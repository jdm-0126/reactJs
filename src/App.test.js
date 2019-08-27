import React from 'react';
import ReactDOM from 'react-dom';
import NewApp from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
