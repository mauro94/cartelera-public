import React from 'react'
import 'Style/main.scss'
import 'Style/events/grid/container.scss'
import Events from 'Containers/Events'

const EventsPage = () => (
    <React.Fragment>
        <h1>Todos los eventos</h1>
        <Events upcoming={false} />
    </React.Fragment>
)

export default EventsPage