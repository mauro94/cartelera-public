import React from 'react'
import { Route, Switch, Router } from 'react-router-dom'
import { withRouter } from 'react-router'
import UpcomingEvents from 'Presentational/Upcoming'
import 'Style/main.scss'
import 'Style/grid.scss'
import { history } from 'Config/helper'
import Header from 'Presentational/Header'
import EventsPage from 'Presentational/EventsPage'

const Main = () => (
    <div className='container'>
        <Router history={history}>
            <React.Fragment>
                <Header />
                <Switch>
                    <Route exact path='/' component={UpcomingEvents} />
                    <Route exact path='/eventos' component={EventsPage} />
                </Switch>
            </React.Fragment>
        </Router>
    </div>
)

export default withRouter(Main)