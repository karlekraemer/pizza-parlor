//Checkout or "step 3" retains all of the information stored via ReduxStore from PizzaList (or "step 1") and CustomerInformation (or "step 2")

import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import './checkout.css';
import React from 'react';


// const total = useSelector(store => store.total)
// customer info imports

const Checkout = () => {
    const history = useHistory(); // useHistory
    // Step 2: useSelector & useDispatch
    const order = useSelector(store => store.order); // getter
    const dispatch = useDispatch();
    const name = useSelector(store => store.name);
    const streetAddress = useSelector(store => store.streetAddress);
    const city = useSelector(store => store.city);
    const zip = useSelector(store => store.zip);
    const orderType = useSelector(store => store.orderType);
    const total = useSelector(store => store.total);



   
    
    // getting the data from db, 
   let pizzaData = {
      city: city,
      customer_name: name,
      street_address: streetAddress,    
      zip: zip,
      type: orderType,
      total: total
      // pizzas: pizzas
    }
    const submitOrder = (pizzaData) => {
        axios({
          method: 'POST',
          url: '/api/order',
          data: pizzaData,
        })
        .then(response => {
          //  confirmation
          alert("Order has beem submitted");
          // empty the checkout
          // dispatch({
          //   type: "ADD_TO_ORDERS",
          // });
  
          // take the user back to the main screen
        })
        .catch((err) => {
          console.log(err);
        });
    }; // need to pass in the event into submitOrder then splat the pizza
    
    
          return (
        <>
            
    <h1>CheckOut</h1>
  <div onChange={submitOrder} >
    <ul>
      <li>Name: {name}</li>
      <li>Address: {streetAddress}</li>
      <li>City: {city}</li>
      <li>Zip: {zip}</li>
      <li>Order Type: {orderType}</li>
      <li>Total: ${total}</li>
    </ul>
  </div>
  
    
            <div>
                
                <button onClick={ () => history.push('/')} className="button">CHECKOUT</button>
            </div>
        </>
    );
}


export default Checkout;
