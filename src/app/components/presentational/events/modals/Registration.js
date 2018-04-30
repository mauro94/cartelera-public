import React from 'react'
import { ModalConfirmation, ModalFeedback, TextField } from 'Presentational/elements'

export const RegistrationSuccessfulModal = (props) => (
    <ModalFeedback
        title={`Gracias por registrarte, ${props.fullName}`}
        subtitle='Revisa tu correo para ver tu confirmación'
        handleOk={() => {
            props.onClose()
        }}>
    </ModalFeedback>
)

export const RegistrationErrorModal = (props) => (
    <ModalFeedback
        error
        title={`¡Oops! El correo ${props.email} ya está registrado`}
        handleOk={() => {
            props.onClose()
        }}>
    </ModalFeedback>
)

export class RegistrationModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            fullName: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }
    componentDidMount() {
        this.setState({
            email: '',
            fullName: ''
        })
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <ModalConfirmation
                subtitle={this.props.event.name}
                title='Regístrate a'
                handleConfirm={() => {
                    this.props.register(this.state.email, this.state.fullName)
                    this.props.onClose()
                }}
                handleCancel={() => {
                    this.props.onClose()
                }}>
                <TextField
                    name='fullName'
                    placeholder='Nombre completo'
                    handleChange={this.handleChange}
                    value={this.state.fullName} />
                <TextField
                    name='email'
                    placeholder='ejemplo@mail.com'
                    handleChange={this.handleChange}
                    value={this.state.email} />
            </ModalConfirmation>
        )
    }
}