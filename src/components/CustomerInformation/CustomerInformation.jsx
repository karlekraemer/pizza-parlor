// CustomerInformation or "step 2" will collect Customer Info 

///////////////////Thoughts to bring to Zak and John ///////////////////////

    //Should this be a form rather than separate inputs?
    //Need help with delivery/pickup button vs selector
    //How to get all of this info sent to our order form? 

///////////////////////////End Thoughts ////////////////////////////////////



import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import file paths
import CustomerName from './CustomerName';
import CustomerStreetAddress from './CustomerStreetAddress';
import CustomerZip from './CustomerZip';
import CustomerCity from './CustomerCity';
import OrderType from './OrderType';

const CustomerInformation = () => {
    // use history
    const history = useHistory();
    //use selector and dispatch
    const dispatch = useDispatch();

    // handleClick.. should this send info to a CustomerInfo array?
    const handleClick = (event) => {
        event.preventDefault();
        console.log('checkout button clicked')
        //need to send all of the individual customer info to the store
        history.push('/Checkout');
    }

    return (
        <>
            <h2>Enter Your Info:</h2>
            <div>
                <CustomerName/>
                <CustomerStreetAddress />
                <CustomerCity/>
                <CustomerZip />
                <OrderType/>
                <button onClick={handleClick} className="button">To Checkout</button>
            </div>
        </>
    )
}


export default CustomerInformation;

