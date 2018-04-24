import React from 'react'
import Spinner from 'react-spinkit'

const Loading = () => (
    <div className='white-screen show'>
        <Spinner name='pulse' />
    </div>
)

export default Loading