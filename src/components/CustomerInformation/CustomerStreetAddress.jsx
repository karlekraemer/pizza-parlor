import { useSelector, useDispatch } from 'react-redux';

const CustomerStreetAddress = () => {
    //use selector and dispatch
    const streetAddress = useSelector(store => store.streetAddress);  
    const dispatch = useDispatch();

    // handleChange
    const handleChange = (event) => {
        //pass data to the reducer
        dispatch({ type: 'SET_CUSTOMER_STREET_ADDRESS', payload: event.target.value });
    }

    return (
        <>
            <div>
                <input value={streetAddress} onChange={handleChange} className="input" type="text" placeholder="Address" />
            </div>
        </>
    )
}


export default CustomerStreetAddress;