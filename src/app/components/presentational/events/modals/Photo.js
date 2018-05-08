import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/fontawesome-free-solid'
import { ModalFeedback } from 'Presentational/elements'

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
                    <img src={props.image} />
                </div>
            </div>
        </ModalFeedback>
    </div>
)

export default PhotoModal