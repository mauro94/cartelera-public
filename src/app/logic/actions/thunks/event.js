import axios from 'axios'
import jsonp from 'jsonp'
import {
    EventActions,
    Status
} from 'Config/constants'
import { request, weatherKey } from 'Config/helper'
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
                let time = new Date(response.data.startDatetime)
                time = time.getTime() / 1000
                jsonp(`https://api.darksky.net/forecast/${weatherKey}/25.65,-100.29,${time}?exclude=flags,currently,hourly&lang=es`, null, (err, weatherResponse) => {
                    if (err) {
                        dispatch(
                            createAction(EventActions.Show, null, error.message,
                                Status.Failed))
                    } else {
                        let selectedEvent = {
                            ...response.data,
                            weatherIcon: weatherResponse.daily.data[0].icon,
                            weatherSummary: weatherResponse.daily.data[0].summary
                        }
                        dispatch(
                            createAction(EventActions.Show, selectedEvent, null,
                                Status.Ready))
                    }
                })
            })
            .catch(error => {
                dispatch(
                    createAction(EventActions.Show, null, error.response.data,
                        Status.Failed))
            })
    }
}

export const register = (email, fullName, eventId) => {
    let registree = {
        email: email,
        'full_name': fullName,
        'event_id': eventId
    }
    return (dispatch) => {
        dispatch(createAction(EventActions.Register, null,
            null, Status.WaitingOnServer))
        request.post('/registrees', registree)
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