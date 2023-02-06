// PizzaList or "Step 1" displays our menu of pizzas with an "add" button and a "remove" button on each


// function PizzaList() {


//     return 

// }

// export default PizzaList;

// make sure to add up the total on this component as well.

import PizzaItem from './PizzaItem';
import React from 'react';
import { useHistory } from 'react-router-dom';


const PizzaList = ({pizzaListProp, fetchPizzas}) => {
    const history = useHistory();

    return (
        <> 
            <h2>Pizza Options:</h2>  
                {pizzaListProp.map(pizza =>
                    (
                        <div key={pizza.id}>
                                <PizzaItem
                                    pizza={pizza}
                                    fetchPizzas={fetchPizzas}
                                />
                        </div>
                    )
                )}
            <button onClick={() => history.push('/Customer/Information')} className="button">Next</button>
        </>    
    )
}


export default PizzaList;


// PizzaItem: 

// questions:
// button isn't working as I expected, but I am thinking this is because I dispatched it incorrectly
// Is this what we meant? I was going to do all in list but noticed we were breaking everything else out
// I returned a form, does this work or does it mess up the data?

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';

// const PizzaItem = ({pizza}) => {
//     const pizzaChoice = useSelector(store => store.pizzaChoice);
//     const dispatch = useDispatch();
//     const history = useHistory();

//     const handleSubmit = (event) => {
//         dispatch({
//             type: 'SET_PIZZA_CHOICE',
//             payload: event.target.value
//         });
//         history.push('/Checkout');
//     } // I could be wrong with this...wasn't 100%. curious if just using pizza works as payload


//     return (
//         <form onSubmit={handleSubmit} className="pizza" key={pizza.id}>
//             <img src={pizza.image_path}></img>
//             <h3>{pizza.name}</h3>
//             <p>{pizza.description}</p>
//             <p className="itemprice">{pizza.price}</p>
//             <button type="submit" value={pizzaChoice} className="add">Add</button>
//         </form>
//     )
// }

// export default PizzaItem;