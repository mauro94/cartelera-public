import React from 'react'
import { connect } from 'react-redux'
import { createBrowserHistory } from 'history'
import axios from 'axios'

export function isEmpty(object) {
    return !object || (Object.keys(object).length === 0) || object == null
}

export const request = axios.create({
    baseURL: 'https://cartelera-api.herokuapp.com/',
    headers: {
        'Accept': 'application/vnd.cartelera-api.v1'
    }
})

export const history = createBrowserHistory()

const month = ["enero", "febrero", "marzo", "abril", "mayo",
    "junio", "julio", "agosto", "septiembre", "octubre",
    "noviembre", "diciembre"]

export const formatDate = (eventDate) => {
    let d = new Date(eventDate)
    return d.getDate() + " de " + month[d.getMonth()]
}

export const randomInt = (from, to) => {
    return (Math.ceil(Math.random() * (to - from)) + from)
}

export const pageDomain = 'www.example.com/'