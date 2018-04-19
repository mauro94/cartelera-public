import React from 'react'
import DetailsSection from './DetailsSection'
import PhotoSection from './PhotoSection'
import 'Style/events/show.scss'
import load from 'Containers/Load'

const Show = ({ event, error, register }) => {
    return (
        <div className='show-event'>
            <DetailsSection event={event} />
            <PhotoSection event={event} register={register} error={error} />
        </div>
    )
}

export default load('event', Show)