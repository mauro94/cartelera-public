import React from 'react'
import 'Style/main.scss'
import 'Style/events/grid/container.scss'
import EventList from 'Containers/events/List'
import { history } from 'Config/router'

const Upcoming = () => (
    <div className='page-container'>
        <h1>Próximos eventos</h1>
        <EventList upcoming={true} />
        <button
            className='view-more-events'
            onClick={() => {
                window.scrollTo(0, 0)
                history.push('/eventos')
            }}>
            ver más
        </button>
    </div>
)

export default Upcoming