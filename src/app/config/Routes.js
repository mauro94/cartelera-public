import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from 'Presentational/Home';

const Routes = () => (
    <Router>
        <Route path="/" component={Home} />
    </Router>
)

export default Routes