import React from 'react'
import { Route, Switch, Router, history, withRouter } from 'Config/router'
import { Header } from 'Presentational/elements'
import { UpcomingEvents, AllEvents } from 'Presentational/events'
import ShowEvent from 'Containers/events/Show'
import 'Style/main.scss'

const App = () => (
    <div className='container'>
        <Router history={history}>
            <React.Fragment>
                <Header />
                <Switch>
                    <Route exact path='/' component={UpcomingEvents} />
                    <Route exact path='/eventos' component={AllEvents} />
                    <Route path="/eventos/:id?" render={({ match }) => <ShowEvent id={match.params.id} />} />
                </Switch>
            </React.Fragment>
        </Router>
    </div>
)

export default withRouter(App)