import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Main from 'Presentational/Main'
import EventPage from 'Presentational/EventPage'

const Routes = () => (
    <Router>
        <Switch>
            <Route path="/" component={Main} />
        </Switch>
    </Router>
)

export default Routes