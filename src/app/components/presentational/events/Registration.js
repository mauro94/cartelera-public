import React from 'react'
import { daysToDeadline, formatTimeToRegister, formatCountToRegister } from 'Config/helper'
import withFeedback from 'Containers/Feedback'
import { Button, ModalAlert, ModalConfirmation, TextField } from 'Presentational/elements'
import { RegistrationModal } from './modals'

const RegistrationSection = ({ event, error, register }) => (
    <div className='register'>
        <div className='cost'>
            {!event.cost || event.cost == 0 ?
                'Sin costo' : `\$${event.cost} MXN`}
        </div>
        <Button
            disabled={event.cancelled || ((event.registeredCount >= event.maxCapacity) && event.maxCapacity != 0)||
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
        <div className='reminder'>
            {event.cancelled ?
                'El registro está cerrado' : 
                formatTimeToRegister(event.registrationDeadline)}
            <small>
                {formatCountToRegister(event.hasRegistration, event.registeredCount, event.maxCapacity)}
            </small>
        </div>

        
    </div>
)

export default withFeedback(RegistrationSection)