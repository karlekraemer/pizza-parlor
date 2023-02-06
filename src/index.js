import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux'; 
import logger from 'redux-logger';

import { createStore, combineReducers, applyMiddleware } from 'redux';

// name reducer for customer info
const name = (state = '', action) => {
  if (action.type === 'SET_CUSTOMER_NAME') {
      return action.payload;
  }
  return state;
}

// city reducer for customer info
const city = (state = '', action) => {
  if (action.type === 'SET_CUSTOMER_CITY') {
      return action.payload;
  }
  return state;
}

// zip reducer for customer info
const zip = (state = '', action) => {
  if (action.type === 'SET_CUSTOMER_ZIP') {
      return action.payload;
  }
  return state;
}

// city reducer for customer info
const streetAddress = (state = '', action) => {
  if (action.type === 'SET_CUSTOMER_STREET_ADDRESS') {
      return action.payload;
  }
  return state;
}

// Order type reducer for customer info
const orderType = (state = '', action) => {
  if (action.type === 'SET_ORDER_TYPE') {
      return action.payload;
  }
  return state;
}

// an array where each piece of customer info is sent?
// const customerInformation = (state = '', action) => {
//   if (action.type === 'SET_CUSTOMER_INFORMATION') {
//       return action.payload;
//   }
//   return state;
// }

const reduxStore = createStore(
    combineReducers({
      name,
      city,
      zip,
      streetAddress,
      orderType
    }),
    applyMiddleware(logger)
  );


// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));

