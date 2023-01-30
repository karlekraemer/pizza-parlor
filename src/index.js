import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux'; 
import logger from 'redux-logger';

import { createStore, combineReducers, applyMiddleware } from 'redux';

// const pizzaList = (state = [], action) => {
//     // TODO - set pizza list with data from server
//     if(action.type === 'SET_PIZZA_LIST'){
//       return action.payload
//     }
//     return state;
// }

// const pizzaItem = (state = [], action) => {
//     // TODO - set pizza list with data from server
//     if(action.type === 'SET_PIZZA_ITEM'){
//       return action.payload
//     }
//     return state;
// }

const reduxStore = createStore(
    combineReducers({
    //   pizzaList,
    //   pizzaItem
    }),
    applyMiddleware(logger)
  );


// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));

