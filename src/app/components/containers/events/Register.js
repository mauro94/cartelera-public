import React from 'react'
import { connect } from 'react-redux'
import { thunks } from 'Logic/actions/thunks'
import { ModalAlert } from 'Presentational/elements'
import RegistrationSection from 'Presentational/events/Registration'
import {
    RegistrationModal,
    RegistrationSuccessfulModal,
    RegistrationErrorModal
} from 'Presentational/events/modals'
import { EventActions, Status } from 'Config/constants'

class Registration extends React.Component {
    constructor(props) {
        super(props)
        this.handleRegister = this.handleRegister.bind(this)
        this.onSuccess = this.onSuccess.bind(this)
        this.onError = this.onError.bind(this)
    }
    handleRegister(email) {
        this.props.register(email, this.props.event.show.id)
        this.setState({
            email: email
        })
    }
    onSuccess() {
        ModalAlert({
            modal: RegistrationSuccessfulModal,
            email: this.state.email
        })
    }
    onError() {
        ModalAlert({
            modal: RegistrationErrorModal,
            email: this.state.email,
            errorMsg: this.props.event.error
        })
    }
    render() {
        return (
            <React.Fragment>
                <RegistrationSection
                    action={EventActions.Register}
                    event={this.props.event.show}
                    onSuccess={this.onSuccess}
                    onError={this.onError}
                    reducer={{
                        status: this.props.event.status,
                        action: this.props.event.action,
                        error: this.props.event.error
                    }}
                    register={(email) => this.handleRegister(email)} />
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        event: state.event
    }
}

const mapDispatchToProps = dispatch => {
    return {
        register: (email, id) => {
            dispatch(thunks.event.register(email, id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration)