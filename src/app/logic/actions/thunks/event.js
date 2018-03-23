import {
    EventActions,
    Status
} from 'Config/constants'
import { request } from 'Config/helper'
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
        dispatch(createAction(EventActions.Current, null,
            null, Status.WaitingOnServer))
        request.get('/events/' + id)
            .then(response => {
                dispatch(
                    createAction(EventActions.Current, response.data, null,
                        Status.Ready))
            })
            .catch((error) => {
                dispatch(
                    createAction(EventActions.Current, null, error.response.data,
                        Status.Failed))
            })
    }
}