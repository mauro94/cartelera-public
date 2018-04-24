import React from 'react'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
import { Button } from 'Presentational/elements'

export const ModalAlert = (props) => {
    let { modal, ...childProps } = props;
    confirmAlert({
        customUI: ({ onClose }) =>
            <props.modal {...childProps} onClose={onClose} />
    })
}

export const ModalConfirmation = (props) => (
    <div className='modal-confirmation'>
        <div className='text'><h2>{props.title}</h2></div>
        <div className='text'><h1>{props.subtitle}</h1></div>
        {props.confirmationMsg && <div className='text'>{props.confirmationMsg}</div>}
        {props.children}
        <div className='modal-confirmation-buttons'>
            {props.confirmButton ? props.confirmButton : <Button
                handleClick={() => {
                    props.handleConfirm()
                }}>
                {props.confirmButtonName || 'Continuar'}
            </Button>}
            <div><Button
                color='grey'
                handleClick={() => {
                    props.handleCancel()
                }}>
                {props.cancelButtonName || 'Cancelar'}
            </Button></div>
        </div>
    </div>
)

export const ModalFeedback = (props) => {
    return <div className={'modal-confirmation' + (props.error ? ' error' : '')}>
        {props.title && <div className='text'><h2>{props.title}</h2></div>}
        {props.subtitle && <div className='text'><h1>{props.subtitle}</h1></div>}
        {props.children}
        {!props.noButton && <div className='modal-confirmation-buttons'>
            <Button
                className='modal-ok-button'
                handleClick={() => {
                    props.handleOk()
                }}>
                {props.buttonName || 'OK'}
            </Button>
        </div>}
    </div>
}