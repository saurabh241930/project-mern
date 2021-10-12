import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from './reducers';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";



const store = createStore(reducers, compose(applyMiddleware(thunk)));



const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CssBaseline />
      <Provider store={store}><App />
      </Provider>
    </Router>
  </React.StrictMode>,
  rootElement
);
