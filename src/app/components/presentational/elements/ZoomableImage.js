import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faSearchPlus } from '@fortawesome/fontawesome-free-solid'
import { PhotoModal } from 'Presentational/events/modals'
import { ModalAlert } from 'Presentational/elements'
import 'Style/common/zoomable-image.scss'

export const ZoomableImage = (props) => (
    <div className='image' onClick={() => {
        ModalAlert({
            modal: PhotoModal,
            image: props.image
        })
    }}>
        <img src={props.image} />
        <div className='overlay'>
            <div className='zoom'>
                <FontAwesomeIcon icon={faSearchPlus} />
            </div>
        </div>
    </div>
)