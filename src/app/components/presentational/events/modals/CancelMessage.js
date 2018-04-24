import React from 'react'
import { ModalFeedback } from "Presentational/elements/index";

const CancelMessageModal = (props) => (
    <ModalFeedback
        subtitle={props.event.name}
        title='Motivo de cancelación de'
        handleOk={() => {
            props.onClose()
        }}>
        <div>{props.event.cancelMessage}</div>
    </ModalFeedback>
)

export default CancelMessageModal