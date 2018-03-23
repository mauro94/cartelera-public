import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducers from 'Logic/reducers'
import { Route, Router, history } from 'Config/router'
import App from 'Presentational/App'

let store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(
        thunkMiddleware
    ))

const Root = () => (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App} />
        </Router>
    </Provider>
)

export default Root