import React from 'react'
import 'Style/main.scss'
import 'Style/grid.scss'
import Events from 'Containers/Upcoming'
import { history } from 'Config/helper'

const EventsPage = () => (
    <React.Fragment>
        <h1>Próximos eventos</h1>
        <Events upcoming={true} />
        <button
            className='view-more-events'
            onClick={() => (history.replace('/eventos'))}>
            ver más
        </button>
    </React.Fragment>
)

export default EventsPage