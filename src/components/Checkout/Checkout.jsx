//Checkout or "step 3" retains all of the information stored via ReduxStore from PizzaList (or "step 1") and CustomerInformation (or "step 2")

//Checkout or "step 3" retains all of the information stored via ReduxStore from PizzaList (or "step 1") and CustomerInformation (or "step 2")

import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import './checkout.css';


const Checkout = () => {
    const history = useHistory(); // useHistory
    // Step 2: useSelector & useDispatch
    const order = useSelector(store => store.order); // getter
    const dispatch = useDispatch();

   
    // getting the data from db, 
   let pizzaData = {
        customer_name: order.customer_name,
            street_address: order.street_sddress,
            city: order.city,
            zip: order.zip,
            type: order.type,
            total: order.total,
            pizzas: order.pizzas 

    }

    const submitOrder = () => {
        axios({
          method: 'POST',
          url: '/api/order',
          data: pizzaData,
        })
        .then((response) => {
          //  confirmation
          alert("Order has beem submitted");
          // empty the checkout
          dispatch({
            type: "CHECKOUT",
          });
  
          // take the user back to the main screen
          history.push("/");
        })
        .catch((err) => {
          console.log(err);
        });
    };
  
  
    
    
    
    
    
          return (
        <>
            
    <h1>CheckOut</h1>
  
    
         <p>{order.customer_name}</p>
         <p>{order.street_address}</p>
         <p>{order.city}</p>
         <p>{order.zip}</p>
            <div>
                
                <button onClick={submitOrder}className="button">CHECKOUT</button>
            </div>
        </>
    );
}


export default Checkout;
