import React from 'react';

import './Header.css'

const Header = () => {
    return (
        <>
            <header>
                <nav className='nav-bar'>
                    <h2>ReactMeals</h2>
                    <button>Your Cart <span>0</span></button>
                </nav>
            </header>
        </>
    )
}

export default Header;