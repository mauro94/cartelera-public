import React from 'react'
import RegistrationSection from 'Containers/events/Register'
import { CancelledEventModal } from './modals/index'
import { Button, ModalAlert } from 'Presentational/elements'
import { isEmpty } from 'Config/helper'
import { ZoomableImage } from 'Presentational/elements/ZoomableImage';

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
            <ZoomableImage image={event.photo} />
            <RegistrationSection />
        </div>
    </div>
)

export default PhotoSection