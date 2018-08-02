import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import { faFacebook, faTwitter }
    from '@fortawesome/fontawesome-free-brands'
import { faComments, faMapMarker, faPhone, faEnvelope }
    from '@fortawesome/fontawesome-free-solid'
import { faCalendarAlt, faClock }
    from '@fortawesome/fontawesome-free-regular'

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
