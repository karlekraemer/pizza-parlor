import React from 'react';
import axios from 'axios';
// routes import
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Checkout from '../Checkout/Checkout';
import PizzaList from '../PizzaList/PizzaList';
import CustomerInformation from '../CustomerInformation/CustomerInformation';

function App() {

  const [pizzaList, setPizzaList] = useState([]);
  const [newCustomer_Name, setNewCustomer_Name] = useState('');
  const [newStreet_Address, setNewStreet_Address] = useState('');
  const [newCity, setNewCity] = useState('');
  const [newType, setNewType] = useState('');
  const [newTotal, setNewTotal] = useState('');
  const [newPizzas, setNewPizzas] = useState('');

  const dispatch = useDispatch();

  // GET pizza request
  const fetchPizzas = () => {
    axios({
      method: 'GET',
      url: '/api/pizza'
    })
      .then((response) => {
        console.log('Entire response:', response);
        // The actual array comes from the data attribute on the response
        console.log('Just the data:', response.data);

        // Set data into component state
        setPizzaList(response.data);
        // dispatch({type: 'SET_PIZZA_ITEM', payload: response.data});
        dispatch({ type: 'SET_PIZZA_LIST', payload: response.data });
      })
      .catch(function (error) {
        console.log('Error on get:', error);
      });
  }

  // GET order reqeust
  const fetchOrder = () => {
    axios({
      method: 'GET',
      url: '/api/order'
    })
      .then((response) => {
        console.log('Entire response:', response);
        // The actual array comes from the data attribute on the response
        console.log('Just the data:', response.data);

        // Set data into component state
        setPizzaList(response.data);
      })
      .catch(function (error) {
        console.log('Error on get:', error);
      });
  }

  ////////////Need a GET request for the line item///////////

  // order form post request below
  const submitOrder = (newCustomer_Name, newStreet_Address, newCity, newZip, newType, newTotal, newPizzas) => {
    axios({
      method: 'POST',
      url: '/api/order',
      data: {
        customer_name: newCustomer_Name,
        street_address: newStreet_Address,
        city: newCity,
        zip: newZip,
        type: newType,
        total: newTotal,
        pizzas: newPizzas // we can make this an array for multiple pizzas in stretch mode

        //Fill out more here as we know what our order form looks like

      }
    })
      .then((response) => {
        console.log('Response:', response);
        //fire GET request
        fetchOrder();
        //reset input fields
        setNewCustomer_Name('');
        setNewStreet_Address('');
        setNewCity('');
        setNewZip('');
        setNewType('');
        setNewTotal('');
        setNewPizzas('');
      })
      .catch(function (error) {
        console.log('Error on add:', error);
      });
  }

  useEffect(() => {
    fetchPizzas();
  }, []);

  useEffect(() => {
    fetchOrder();
  }, []);




  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
        <h2 className='transaction-total'>Total: </h2>
      </header>
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
      {/* will need to add fetchTotal into this to display at the top of each page */}
        <div>
          <Router>
            <Route exact path="/">
              <PizzaList
                pizzaListProp={pizzaList}
                fetchPizzas={fetchPizzas}/>
            </Route>
            <Route exact path="/Customer/Information">
              <CustomerInformation/>
            </Route>  
          </Router>
        </div>
    </div>
  );
}

export default App;
