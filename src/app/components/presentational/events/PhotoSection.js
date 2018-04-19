import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faSearchPlus, faTimes } from '@fortawesome/fontawesome-free-solid'
import RegistrationSection from './Registration'
import { ModalAlert, ModalFeedback } from 'Presentational/elements'

const PhotoSection = ({ event, register, error }) => (
    <div className='photo-section-container'>
        <div className='photo-section'>
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
            <RegistrationSection
                event={event}
                register={register}
                error={error} />
        </div>
    </div>
)

const PhotoModal = (props) => (
    <div className='photo-modal'>
        <ModalFeedback
            noButton
            handleOk={() => {
                props.onClose()
            }}>
            <div className='enlarged-image'>
                <div className='close' onClick={() => props.onClose()}>
                    <FontAwesomeIcon icon={faTimes} size="lg" />
                </div>
                <div className='image'>
                    <img src={props.event.photo} />
                </div>
            </div>
        </ModalFeedback>
    </div>
)

export default PhotoSection