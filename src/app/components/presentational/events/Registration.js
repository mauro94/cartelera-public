import React from 'react'
import { daysToDeadline, formatTimeToRegister } from 'Config/helper'
import { Button, ModalAlert, ModalConfirmation, TextField } from 'Presentational/elements'

const RegistrationSection = ({ event, error }) => (
    <div className='register'>
        <div className='cost'>
            {!event.cost || event.cost == 0 ?
                'Sin costo' : `\$${event.cost} MXN`}
        </div>
        <Button
            disabled={event.cancelled ||
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
        </div>
    </div>
)

class RegistrationModal extends React.Component {
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

export default RegistrationSection