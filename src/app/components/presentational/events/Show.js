import React from 'react'
import DetailsSection from './DetailsSection'
import PhotoSection from './PhotoSection'
import 'Style/events/show.scss'
import load from 'Containers/Load'

const Show = ({ event, error, register }) => {
    return (
        <div className='show-event'>
            <DetailsSection event={event} />
            <PhotoSection event={event} register={register} error={error} />
        </div>
    )
}

let dummyevent = {
    languages: ['español', 'inglés'],
    "id": 3,
    "photo": "https://i.pinimg.com/564x/6a/c9/5b/6ac95b0398fc871f1b1771863aecd412.jpg",
    "name": "Other Event",
    "startDatetime": "2018-03-03T21:28:23.735-06:00",
    "location": "Aulas 3-101",
    "cancelled": true,
    "description": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    "campus": "MTY",
    "category": "Tecnología",
    "cost": 0,
    'currency': 'MXN',
    'hasRegistration': true,
    "publicEvent": true,
    "endDatetime": null,
    "requirementsToRegister": null,
    "registrationUrl": null,
    "registrationDeadline": "2018-06-16T21:28:23.735-06:00",
    "schedule": 'https://i.pinimg.com/564x/eb/06/dd/eb06dd07b4989aa5404a3d074bca03b9.jpg',
    "facebookUrl": 'fb.com/acmmty',
    "twitterUrl": 'twitter.com/acmmty',
    "contactPhone": '8181818',
    "contactEmail": 'acm@mail.com',
    "contactName": 'ACM',
    contactSuffix: 'la',
    "published": true,
    "cancelMessage": 'No se podrá hacer el evento porque habrá una tormenta matona',
    "tags": ['wit', 'code', 'tech'],
    'targetedPublic': ['ITC', 'IMT', 'IFI', 'LAD'],
    weatherSummary: "Despejado durante el día.",
    weatherIcon: 'clear-day'
}

export default load('event', Show)