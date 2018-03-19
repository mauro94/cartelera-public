import {
    EventActions,
    Status
} from 'Config/constants'
import { history, request } from 'Config/helper'
import { createAction } from 'Logic/actions'
import { events } from 'Config/test'

export const all = () => {
    return (dispatch) => {
        dispatch(createAction(EventActions.All, null,
            null, Status.WaitingOnServer))
        request.get('/events')
            .then(response => {
                dispatch(
                    createAction(EventActions.All, events, null,
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