import React from 'react'
import { Route, Switch, Router } from 'react-router-dom'
import { withRouter } from 'react-router'
import { history } from 'Config/helper'
import Header from 'Presentational/Header'
import UpcomingEvents from 'Presentational/Upcoming'
import EventsPage from 'Presentational/EventsPage'
import EventPage from 'Presentational/EventPage'
import 'Style/main.scss'

const Main = () => (
    <div className='container'>
        <Router history={history}>
            <React.Fragment>
                <Header />
                <Switch>
                    <Route exact path='/' component={UpcomingEvents} />
                    <Route exact path='/eventos' component={EventsPage} />
                    <Route exact path="/eventos/:id?" component={EventPage} />
                </Switch>
            </React.Fragment>
        </Router>
    </div>
)

export default withRouter(Main)