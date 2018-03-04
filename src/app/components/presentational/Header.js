import React from 'react'
import logo from 'Images/logo.svg'

const Header = () => (
    <div className='header'>
        <div className='logo'>
            <img src={logo} />
        </div>
        <div className='campus'>
            <span>Campus</span>
            <span>
                <select><option>MTY</option></select>
            </span>
        </div>
    </div>
)

export default Header