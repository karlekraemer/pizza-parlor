// questions:
// button isn't working as I expected, but I am thinking this is because I dispatched it incorrectly
// Is this what we meant? I was going to do all in list but noticed we were breaking everything else out
// I returned a form, does this work or does it mess up the data?

//////////////////////////////////////////////////////////////////////////////////////////////////////////

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react'; 


const PizzaItem = ({pizza}) => {
    // const [addPizza, setAddPizza] = useState('');
    const pizzaChoice = useSelector(store => store.pizzaChoice);
    const dispatch = useDispatch();

    // const handleSubmit = (event) => {
    //     dispatch({
    //         type: 'ADD_PIZZA',
    //         payload: addPizza
    //     });
    // } // I could be wrong with this...wasn't 100%. curious if just using pizza works as payload


    return (
        <form className="pizza" key={pizza.id}>
            <img src={pizza.image_path}></img>
            <h3>{pizza.name}</h3>
            <p>{pizza.description}</p>
            <p className="itemprice">{pizza.price}</p>
            <button onClick={() => dispatch({ type: 'ADD_PIZZA', payload: pizza.price })}>ADD</button>
        </form>
    )
}

export default PizzaItem;

//  <button onClick={() => dispatch({ type: 'ADD_PASSENGER' })}> Enter Passenger </button>
