import {
    EventActions,
    Status
} from 'Config/constants'
import { history, request } from 'Config/helper'
import { createAction } from 'Logic/actions'
import { events } from 'Config/test'

export const all = () => {
    return (dispatch) => {
        dispatch(createAction(EventActions.Upcoming, null,
            null, Status.WaitingOnServer))
        request.get('/events')
            .then(response => {
                dispatch(
                    createAction(EventActions.Upcoming, events, null,
                        Status.Ready))
            })
            .catch((error) => {
                dispatch(
                    createAction(EventActions.Upcoming, null, error.response.data,
                        Status.Failed))
            })
    }
}