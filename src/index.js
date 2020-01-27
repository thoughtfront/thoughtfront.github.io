import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import App from './app';

ReactDOM.render(
  <div>
      <Router>
          <App />
      </Router>
  </div>,
  document.getElementById('root')
);
