import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

const OrderType = () => {
    //use selector and dispatch
    const orderType = useSelector(store => store.orderType);  
    const dispatch = useDispatch();

    // handleChange
    const handleChange = (event) => {
        //pass data to the reducer
        dispatch({ type: 'SET_ORDER_TYPE', payload: event.target.value });
    }

    return (
        <>
        <h2> Pickup or Delivery? </h2>
            <div>
                <input value={orderType} onChange={handleChange} className="input" type="text" placeholder="pick-up or delivery" />
            </div>
        </>
    )
}


export default OrderType;