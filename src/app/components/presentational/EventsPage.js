import React from 'react'
import 'Style/main.scss'
import 'Style/events/grid/container.scss'
import Events from 'Containers/Events'

const EventsPage = () => (
    <div className='page-container'>
        <h1>Todos los eventos</h1>
        <Events upcoming={false} />
    </div>
)

export default EventsPage