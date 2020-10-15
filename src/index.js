import React from 'react';
import ReactDOM from 'react-dom';

import Home from './components/home';

import './index.scss';

const App = () => (
  <div>
    <Home />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
