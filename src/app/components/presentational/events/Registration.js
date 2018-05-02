import React from 'react'
import { daysToDeadline, formatTimeToRegister, formatCountToRegister, pageDomain } from 'Config/helper'
import withFeedback from 'Containers/Feedback'
import { Button, ModalAlert, ModalConfirmation, TextField } from 'Presentational/elements'
import { RegistrationModal } from './modals'
import Share from 'Presentational/elements/Share';

const RegistrationSection = ({ event, error, register }) => (
    <div className='register'>
        <div className='cost'>
            {!event.cost || event.cost == 0 ?
                'Sin costo' : `\$${event.cost} MXN`}
        </div>
        {event.hasRegistration && <RegisterButton event={event} error={error} register={register} />}
        {!event.hasRegistration && event.registrationUrl && <MoreInfoButton event={event} />}
        <Reminder event={event} />
        <Share
            url={`${pageDomain}/eventos/${event.id}`}
            message={event.name}/>
    </div>
)

const MoreInfoButton = ({ event }) => (
    <React.Fragment>
        <a target="_blank" href={event.registrationUrl}>
            <Button>
                Más información
            </Button>
        </a>
    </React.Fragment>
)

const RegisterButton = ({ event, error, register }) => (
    <React.Fragment>
        <Button
            disabled={event.cancelled || ((event.registeredCount >= event.maxCapacity) && event.maxCapacity != 0) ||
                daysToDeadline(event.registrationDeadline) < 0}
            handleClick={() => {
                ModalAlert({
                    modal: RegistrationModal,
                    register: register,
                    error: error,
                    event: event
                })
            }}>
            {event.hasRegistration ?
                'Regístrate' : 'Más información'}
        </Button>
    </React.Fragment>
)

const Reminder = ({ event }) => (
    <React.Fragment>
        <div className='reminder'>
            {registerButtonSubtitle(event)}
            <small>
                {formatCountToRegister(event.hasRegistration, event.registeredCount, event.maxCapacity)}
            </small>
        </div>
    </React.Fragment>
)

const registerButtonSubtitle = (event) => {
    if (!event.hasDeadline) {
        return ''
    }

    if (event.cancelled || ((event.registeredCount >= event.maxCapacity) && event.maxCapacity != 0)) {
        return 'El registro está cerrado'
    }

    return formatTimeToRegister(event.registrationDeadline)
}

export default withFeedback(RegistrationSection)