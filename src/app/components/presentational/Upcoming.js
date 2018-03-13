import React from 'react'
import 'Style/main.scss'
import 'Style/eventGrid.scss'
import Events from 'Containers/Upcoming'
import { history } from 'Config/helper'

const EventsPage = () => (
    <React.Fragment>
        <h1>Próximos eventos</h1>
        <Events upcoming={true} />
        <button
            className='view-more-events'
            onClick={() => { window.scrollTo(0, 0)(history.replace('/eventos')) }}>
            ver más
        </button>
    </React.Fragment>
)

export default EventsPage