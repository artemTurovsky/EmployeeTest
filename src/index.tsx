import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'

import { BrowserRouter as Router } from 'react-router-dom'
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux'
import { reduser } from './redux/reduser'

const store = createStore(reduser, composeWithDevTools())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);