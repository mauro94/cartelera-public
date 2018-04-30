import React from 'react'
import { daysToDeadline, formatTimeToRegister } from 'Config/helper'
import withFeedback from 'Containers/Feedback'
import { Button, ModalAlert, ModalConfirmation, TextField } from 'Presentational/elements'
import { RegistrationModal } from './modals'

const RegistrationSection = ({ event, error, register }) => (
    <div className='register'>
        <div className='cost'>
            {!event.cost || event.cost == 0 ?
                'Sin costo' : `\$${event.cost} MXN`}
        </div>
        {event.hasRegistration && <RegisterButton event={event} error={error} register={register} />}
        {event.registrationUrl && <MoreInfoButton event={event} />}
    </div>
)

const MoreInfoButton = ({ event }) => (
    <Link to={event.registrationUrl}>
        <Button>
            Más información
        </Button>
    </Link>
)

const RegisterButton = ({ event, error, register }) => (
    <React.Fragment>
        <Button
            disabled={event.cancelled ||
                daysToDeadline(event.registrationDeadline) < 0}
            handleClick={() => {
                ModalAlert({
                    modal: RegistrationModal,
                    register: register,
                    error: error,
                    event: event
                })
            }}>
            {'Regístrate'}
        </Button>
        <div className='reminder'>
            {registerButtonSubtitle(event)}
        </div>
    </React.Fragment>
)

const registerButtonSubtitle = (event) => {
    if (event.cancelled) {
        return 'El registro está cerrado'
    }
    return formatTimeToRegister(event.registrationDeadline)
}

export default withFeedback(RegistrationSection)