import { useSelector, useDispatch } from 'react-redux';

const CustomerCity = () => {
    //use selector and dispatch
    const city = useSelector(store => store.city);  
    const dispatch = useDispatch();

    // handleChange
    const handleChange = (event) => {
        //pass data to the reducer
        dispatch({ type: 'SET_CUSTOMER_CITY', payload: event.target.value });
    }

    return (
        <>
            <div>
                <input value={city} onChange={handleChange} className="input" type="text" placeholder="City"/>
            </div>
        </>
    )
}


export default CustomerCity;