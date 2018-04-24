import axios from 'axios'
import jsonp from 'jsonp'
import {
    EventActions,
    Status
} from 'Config/constants'
import { request, weatherRequest, weatherKey } from 'Config/helper'
import { createAction } from 'Logic/actions'
import { history } from 'Config/router'

export const all = () => {
    return (dispatch) => {
        dispatch(createAction(EventActions.All, null,
            null, Status.WaitingOnServer))
        request.get('/events')
            .then(response => {
                dispatch(
                    createAction(EventActions.All, response.data, null,
                        Status.Ready))
            })
            .catch((error) => {
                dispatch(
                    createAction(EventActions.All, null, error.response.data,
                        Status.Failed))
            })
    }
}

export const get = (id) => {
    return (dispatch) => {
        dispatch(createAction(EventActions.Show, null,
            null, Status.WaitingOnServer))
        request.get('/events/' + id)
            .then(response => {
                dispatch(
                    createAction(EventActions.Show, response.data, null,
                        Status.Ready))
            })
            .catch(error => {
                dispatch(
                    createAction(EventActions.Show, null, error.response.data,
                        Status.Failed))
            })
    }
}

export const register = (email, eventId) => {
    return (dispatch) => {
        dispatch(createAction(EventActions.Register, null,
            null, Status.WaitingOnServer))
        request.post('/registrees', { 'user_email': email, 'event_id': eventId })
            .then(response => {
                dispatch(
                    createAction(EventActions.Register, response.data, null,
                        Status.Ready))
            })
            .catch(error => {
                dispatch(
                    createAction(EventActions.Register, null, error.response.data,
                        Status.Failed))
            })
    }
}