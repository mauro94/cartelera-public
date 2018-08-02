import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

export function isEmpty(object) {
    return !object || (Object.keys(object).length === 0) || object == null || (Array.isArray(object) && object.length == 0)
}

export const request = axios.create({
    baseURL: 'https://cartelera-api.herokuapp.com/',
    headers: {
        'Accept': 'application/vnd.cartelera-api.v1',
        'Content-Type': 'application/json'
    }
})

const month = ["enero", "febrero", "marzo", "abril", "mayo",
    "junio", "julio", "agosto", "septiembre", "octubre",
    "noviembre", "diciembre"]

export const daysToDeadline = (deadline) => {
    let end = new Date(deadline)
    let now = new Date()
    let distance = end - now

    let _second = 1000
    let _minute = _second * 60
    let _hour = _minute * 60
    let _day = _hour * 24
    let days = Math.floor(distance / _day)
    if (distance < 0) {
        return -1
    }
    return days
}

export const formatTimeToRegister = (deadline) => {
    let days = daysToDeadline(deadline)
    if (days < 0) {
        return 'El registro ya se cerró'
    }
    if (days == 0) {
        return `Hoy se cierra el registro`
    }
    if (days == 1) {
        return `En un día se cierra el registro`
    }
    if (days > 1 && days < 7) {
        return `En ${days} días se cierra el registro`
    }
    if (days == 7) {
        return `En una semana se cierra el registro`
    }
    return `El registro se cierra el ${formatDate(deadline)}`
}

export const formatCountToRegister = (hasRegistration, registeredCount, capacity) => {
    if (hasRegistration && capacity > 0) {
        let count = capacity - registeredCount
        let percent = ((registeredCount / capacity) * 100).toFixed(0)

        if (count <= 0) {
            return ''
        }
        if (count <= 15) {
            if (count == 1) {
                return `Queda solo ${count} lugar, regístrate pronto`
            }
            else {
                return `Quedan solo ${count} lugares, regístrate pronto`
            }
        }
        else {
            if (percent >= 30) {
                return `El registro está ${percent}% lleno`
            }
            else {
                return ''
            }
        }
    }

    return ''
}

export const formatArray = (arr) => {
    let outStr = '';
    if (arr.length === 1) {
        outStr = arr[0]
    } else if (arr.length === 2) {
        let joiner = arr[1][0].toLowerCase() == 'i' ?
            ' e ' : ' y '
        outStr = arr.join(joiner)
    } else if (arr.length > 2) {
        let firstWords = arr.splice(0, arr.length - 1)
        let lastWord = arr[0][0].toLowerCase() == 'i' ?
            `e ${arr[0]}` : `y ${arr[0]}`
        outStr = `${firstWords.join(', ')} ${lastWord}`
    }
    return outStr;
}

export const formatDate = (eventDate) => {
    let d = new Date(eventDate)
    return `${d.getDate()} de ${month[d.getMonth()]} `
}

export const eventDates = (start, end) => {
    if (!end) {
        return formatDate(start)
    }
    let startDate = new Date(start)
    let endDate = new Date(end)
    if (startDate.getMonth() == endDate.getMonth()) {
        if (startDate.getDate() == endDate.getDate()) {
            return formatDate(start)
        }
        else {
            return `${startDate.getDate()} - ${formatDate(end)} `
        }
    }
    return `${formatDate(startDate)} - ${formatDate(endDate)} `
}

const formatTime = (date) => {
    let d = new Date(date)
    return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

export const eventTime = (start, end) => {
    if (!end) {
        return formatTime(start)
    }
    let startDate = new Date(start)
    let endDate = new Date(end)
    if (endDate - startDate <= 0) {
        return formatTime(start)
    }
    if (startDate.getMonth() == endDate.getMonth()) {
        if (startDate.getDate() == endDate.getDate()) {
            return `${formatTime(start)} - ${formatTime(end)} `
        }
        return formatTime(start)
    }
    return formatTime(start)
}

export const randomInt = (from, to) => {
    return (Math.ceil(Math.random() * (to - from)) + from)
}

export const pageTitle = 'Cartelera de Innovación y Emprendimiento'

export const pageDomain = 'http://beta-cartelera-public.surge.sh'