import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Header.css';

function Header() {
    const total = useSelector(store => store.total)

    return(
        <div>
            <header className='App-header'>
                <h1 className='App-title'>Prime Pizza</h1>
                <h2 className='transaction-total'>Total: {total} </h2>
            </header>
            <img src='images/pizza_photo.png' />
            <p>Pizza is great.</p>
        </div>
    )     
}

export default Header;