import {
    Route as RoutePackage,
    Switch as SwitchPackage,
    Router as RouterPackage
} from 'react-router-dom'
import { withRouter as RouterWrapper } from 'react-router'
import { createBrowserHistory } from 'history'

export const history = createBrowserHistory()
export const Route = RoutePackage
export const Switch = SwitchPackage
export const Router = RouterPackage
export const withRouter = RouterWrapper