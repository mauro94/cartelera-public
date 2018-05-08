import React from 'react'
import { eventDates, eventTime, pageDomain, pageTitle, isEmpty }
    from 'Config/helper'
import { weatherIcon } from 'Config/icons'
import { history } from 'Config/router'
import {
    Button,
    Hashtags,
    IconedInfoItem,
    InfoItemContact,
    IconInfoCollection,
    InfoItem,
    Share
} from 'Presentational/elements'

const DetailsSection = ({ event }) => (
    <div className='details-section'>
        <ShowEventTitle event={event} />
        <GeneralInfo event={event} />
    </div>
)

const ShowEventTitle = ({ event }) => (
    <div className='title'>
        <div>
            <h1 className={event.cancelled ? 'line-through' : ''}>
                {event.name}
            </h1>
        </div>
        <div className='subtitle'>
            <div className='category'>
                {`Evento de ${event.category.toLowerCase()}`}
            </div>
            <div className='created-by'>
                {`Creado por ${!isEmpty(event.suffix) ? event.suffix : ''} ${event.contactName}`}
            </div>
        </div>
    </div>
)

const GeneralInfo = ({ event }) => (
    <React.Fragment>
        <GeneralIconedInfo event={event} />
        <div className='general-info'>
            <InfoItem array itemKey='majors' item={event} />
            <InfoItem itemKey='description' item={event} />
            <InfoItem itemKey='requirementsToRegister' component={RequirementsSection} item={event} />
            <InfoItem img itemKey='schedule' item={event} />
            <InfoItemContact itemKey='contact' component={ContactInfo} item={event} />
            <InfoItem itemKey='share' component={ShareSection} item={event} />
            <InfoItem itemKey='tags' component={TagsSection} item={event} />
        </div>
    </React.Fragment>
)

const RequirementsSection = ({ item }) => (
    <React.Fragment>
        {!item.publicEvent && 'Pueden asistir alumnos del Tec.'}
        {item.requirementsToRegister}
    </React.Fragment>
)

const TagsSection = ({ item }) => (
    <Hashtags hashtag={item.tagNames} index={1} />
)

const ShareSection = ({ item }) => {
    let shareUrl = pageDomain + history.location.pathname
    let shareMsg = item.name + ' - ' + pageTitle
    return <Share url={shareUrl} message={shareMsg} />
}

const ContactInfo = ({ item }) => (
    <div className='contact'>
        <IconInfoCollection
            keys={[
                'contactEmail',
                'contactPhone',
                'facebookUrl',
                'twitterUrl'
            ]}
            item={item} />
    </div>
)

const GeneralIconedInfo = ({ event }) => (
    <div className='iconed-info'>
        <IconedInfoItem
            item={event}
            keys={['location', 'campus']}
            text={`${event.location}, ${event.campus}`} />
        <IconedInfoItem
            date
            item={event}
            keys={['startDatetime', 'endDatetime']}
            text={eventDates(event.startDatetime, event.endDatetime)} />
        {<IconedInfoItem
            time
            item={event}
            keys={['startDatetime', 'endDatetime']}
            text={eventTime(event.startDatetime, event.endDatetime)} />}
        <IconedInfoItem
            array
            item={event}
            keys={['languages']}
            text={`Ofrecido en array`} />
        <IconedInfoItem
            icon={weatherIcon[event.weatherIcon]}
            item={event}
            keys={['weatherSummary']}
            text={event.weatherSummary} />
    </div>
)

export default DetailsSection