import React from 'react'
import logo from 'Images/logo.svg'
import { DownArrow } from 'Images/downArrow'

const Header = () => (
    <div className='header'>
        <div className='logo'>
            <img src={logo} />
        </div>
        <div className='campus'>
            <span className='label'>Campus</span>
            <span>
                <div className='select'><div>MTY</div>
                    <div className='down-arrow'>
                        <DownArrow />
                    </div>
                </div>
            </span>
        </div>
    </div>
)

export default Header