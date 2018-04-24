import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faSearchPlus } from '@fortawesome/fontawesome-free-solid'
import RegistrationSection from 'Containers/events/Register'
import { CancelledEventModal, PhotoModal } from './modals/index'
import { Button, ModalAlert } from 'Presentational/elements'
import { isEmpty } from 'Config/helper'

const PhotoSection = ({ event, register, error, ...props }) => (
    <div className='photo-section-container'>
        <div className='photo-section'>
            {
                event.cancelled &&
                <Button
                    color='red'
                    right
                    handleClick={() => ModalAlert({
                        modal: CancelledEventModal,
                        event: event
                    })}
                    disabled={isEmpty(event.cancelMessage)}>
                    {'CANCELADO'}
                </Button>
            }
            <div className='image' onClick={() => {
                ModalAlert({
                    modal: PhotoModal,
                    event: event
                })
            }}>
                <img src={event.photo} />
                <div className='overlay'>
                    <div className='zoom'>
                        <FontAwesomeIcon icon={faSearchPlus} />
                    </div>
                </div>
            </div>
            <RegistrationSection />
        </div>
    </div>
)

export default PhotoSection