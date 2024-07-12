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
                <img src={imageone} alt='Delicious food table'></img>
                {
                    window.addEventListener('resize', () => {
                        const size =" Intter height "+ window.innerHeight + " width "+ window.innerWidth
                        console.log(size);
                    })
                }
            </div>
        </>
    )
}

export default Header;