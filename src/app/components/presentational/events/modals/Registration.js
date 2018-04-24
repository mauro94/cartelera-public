import React from 'react'
import { ModalConfirmation, ModalFeedback, TextField } from 'Presentational/elements'

export const RegistrationSuccessfulModal = (props) => (
    <ModalFeedback
        title={`Gracias por registrarte, ${props.email}`}
        subtitle='Revisa tu correo para ver tu confirmación'
        handleOk={() => {
            props.onClose()
        }}>
    </ModalFeedback>
)

export const RegistrationErrorModal = (props) => (
    <ModalFeedback
        error
        title={`Error al registrar a ${props.email}`}
        handleOk={() => {
            props.onClose()
        }}>
    </ModalFeedback>
)

export class RegistrationModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }
    componentDidMount() {
        this.setState({
            email: ''
        })
    }
    handleChange(e) {
        this.setState({
            email: e.target.value
        })
    }
    render() {
        return (
            <ModalConfirmation
                subtitle={this.props.event.name}
                title='Regístrate a'
                handleConfirm={() => {
                    this.props.register(this.state.email)
                    this.props.onClose()
                }}
                handleCancel={() => {
                    this.props.onClose()
                }}>
                <TextField
                    placeholder='ejemplo@mail.com'
                    handleChange={this.handleChange}
                    value={this.state.email} />
            </ModalConfirmation>
        )
    }
}