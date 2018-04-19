import React from 'react'
import 'Style/main.scss'
import 'Style/events/grid/container.scss'
import EventList from 'Containers/events/List'

const AllEvents = () => (
    <div className='page-container'>
        <h1>Todos los eventos</h1>
        <EventList />
    </div>
)

export default AllEvents