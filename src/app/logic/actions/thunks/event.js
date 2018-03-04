import {
    EventActions,
    Status
} from 'Config/constants'
import { history } from 'Config/helper'
import { createAction } from 'Logic/actions'
import { request } from 'Config/helper'

export const all = () => {
    return (dispatch) => {
        dispatch(createAction(EventActions.Upcoming, null,
            null, Status.WaitingOnServer))
        request.get('/events')
            .then(response => {
                dispatch(
                    createAction(EventActions.Upcoming, response.data, null,
                        Status.Ready))
            })
            .catch((error) => {
                dispatch(
                    createAction(EventActions.Upcoming, null, error.response.data,
                        Status.Failed))
            })
    }
}