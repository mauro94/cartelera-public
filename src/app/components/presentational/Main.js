import React from 'react'
import { Route } from 'react-router-dom'
import UpcomingEvents from 'Presentational/Upcoming'
import 'Style/main.scss'
import 'Style/grid.scss'
import Header from 'Presentational/Header'
import EventsPage from 'Presentational/EventsPage'

const Main = () => (
    <div className='container'>
        <Header />
        {/* //segun la ruta */}
        <React.Fragment>
            <Route exact path='/' component={UpcomingEvents} />
            <Route exact path='/eventos' component={EventsPage} />
        </React.Fragment>
    </div>
)

export default Main