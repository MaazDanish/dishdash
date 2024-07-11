import React from 'react';

import './Header.css'
import imageone from '..//../Images/image5.jpg'

const Header = () => {
    return (
        <>
            <header className='nav-bar'>
                <h2>ReactMeals</h2>
                <button>Your Cart <span>0</span></button>
            </header>
            <div className='image-box'>
                <img src={imageone}></img>
            </div>
        </>
    )
}

export default Header;