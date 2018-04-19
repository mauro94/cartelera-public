import React from 'react'
import 'Style/main.scss'
import 'Style/events/grid/container.scss'
import EventList from 'Containers/events/List'
import { history } from 'Config/router'
import { Button } from 'Presentational/elements'

const Upcoming = () => (
    <div className='page-container landing-page'>
        <h1>Próximos eventos</h1>
        <EventList upcoming />
        <Button
            handleClick={() => {
                window.scrollTo(0, 0)
                history.push('/eventos')
            }}>
            Ver más
        </Button>
    </div>
)

export default Upcoming