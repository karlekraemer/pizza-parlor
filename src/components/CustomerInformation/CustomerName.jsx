import { useSelector, useDispatch } from 'react-redux';

const CustomerName = () => {

    //use selector and dispatch
    const name = useSelector(store => store.name);  
    const dispatch = useDispatch();

    // handleChange
    const handleChange = (event) => {
        //pass data to the reducer
        dispatch({ type: 'SET_CUSTOMER_NAME', payload: event.target.value });
    }

    return (
        <>
            <div>
                <input value={name} onChange={handleChange} className="input" type="text" placeholder="Customer Name"/>
            </div>
        </>
    )
}


export default CustomerName;