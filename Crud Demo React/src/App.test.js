import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
//TODO  We need to flesh out the rest of these spec tests, this would be a good exercise
// to try to make sure that you all understand how to use React, try to implement the same
// suite of tests as we did within the Angular application.
