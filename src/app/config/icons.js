import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {
    faSun,
    faMoon,
    faTint,
    faSnowflake,
    faCloud
} from '@fortawesome/fontawesome-free-solid'
import { faFacebook, faTwitter }
    from '@fortawesome/fontawesome-free-brands'
import { faComments, faMapMarker, faPhone, faEnvelope }
    from '@fortawesome/fontawesome-free-solid'
import { faCalendarAlt, faClock }
    from '@fortawesome/fontawesome-free-regular'

export const weatherIcon = {
    'clear-day': faSun,
    'clear-night': faMoon,
    'rain': faTint,
    'snow': faSnowflake,
    'sleet': faSnowflake,
    'wind': faCloud,
    'fog': faCloud,
    'cloudy': faCloud,
    'partly-cloudy-day': faCloud,
    'partly-cloudy-night': faCloud
}

export const infoIcon = {
    contactEmail: faEnvelope,
    email: faEnvelope,
    contactPhone: faPhone,
    facebookUrl: faFacebook,
    twitterUrl: faTwitter,
    location: faMapMarker,
    campus: faMapMarker,
    date: faCalendarAlt,
    time: faClock,
    languages: faComments
}
