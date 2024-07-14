import React from 'react';

import './Header.css'
import imageone from '..//../Images/image5.jpg'
import CartHeaderButton from './CartHeaderButton';

const Header = () => {
    return (
        <>
            <header className='nav-bar'>
                <h2>ReactMeals</h2>
                <CartHeaderButton></CartHeaderButton>
            </header>
            <div className='image-box'>
                <img src={imageone} alt='Delicious food table'></img>
            </div>
        </>
    )
}

export default Header;

// {
// window.addEventListener('resize', () => {
//     const size = " Intter height " + window.innerHeight + " width " + window.innerWidth
//     console.log(size);
// })
// }