import React from 'react'
import { connect } from 'react-redux'
import { createBrowserHistory } from 'history'
import axios from 'axios'

export function isEmpty(object) {
    return !object || (Object.keys(object).length === 0) || object == null
}

export const request = axios.create({
    baseURL: 'https://5a8e3738b5a3130012909abb.mockapi.io/api',
    timeout: 1000
})

export const history = createBrowserHistory()

const month = ["enero", "febrero", "marzo", "abril", "mayo",
    "junio", "julio", "agosto", "septiembre", "octubre",
    "noviembre", "diciembre"]

export const formatDate = (eventDate) => {
    let d = new Date(eventDate)
    return d.getDate() + " de " + month[d.getMonth()]
}