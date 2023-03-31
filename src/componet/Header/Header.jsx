import React, { useEffect, useState } from 'react';
import logo from '../../image/profile.png';
import './Header.css'
/*import logo from '../../images/prof';*/

const Header = () => {
    return (
        <nav className='header-container border-bottom'>
            <div >
                <h2>Knowledge Cafe</h2> 
            </div>
            
            <div>

                <img src={logo} alt="" />

            </div>

        </nav>
    );
};

export default Header;