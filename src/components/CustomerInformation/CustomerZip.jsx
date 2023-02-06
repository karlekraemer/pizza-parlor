import { useSelector, useDispatch } from 'react-redux';

const CustomerZip = () => {
    //use selector and dispatch
    const zip = useSelector(store => store.zip);  
    const dispatch = useDispatch();

    // handleChange
    const handleChange = (event) => {
        //pass data to the reducer
        dispatch({ type: 'SET_CUSTOMER_ZIP', payload: event.target.value });
    }

    return (
        <>
            <div>
                <input value={zip} onChange={handleChange} className="input" type="text" />
            </div>
        </>
    )
}


export default CustomerZip;