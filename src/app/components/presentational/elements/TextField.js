import React from 'react'

const TextField = (props) => (
    <div className='input-container'>
        <div className='text-input'>
            <input
                name={props.name}
                type='text'
                placeholder={props.placeholder}
                onChange={props.handleChange}
                value={props.value} />
            <span className='separator'> </span>
        </div>
    </div>
)

export default TextField