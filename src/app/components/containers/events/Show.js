import React from 'react'
import { connect } from 'react-redux'
import { thunks } from 'Logic/actions/thunks'
import { createAction } from 'Logic/actions'
import { Status, EventActions } from 'Config/constants'
import { isEmpty } from 'Config/helper'
import ShowEvent from 'Presentational/events/Show'

var Spinner = require('react-spinkit');

let component = <Spinner name="pulse" />

class Show extends React.Component {
    componentDidMount() {
        if (!this.props.loading && isEmpty(this.props.event)) {
            this.props.loadEvent(this.props.id)
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.loading && nextProps.ready) {
            if (isEmpty(nextProps.event))
                component = <div className='no-events'>
                    No existe el evento en la base de datos</div>
            else
                component = <ShowEvent event={nextProps.event} />
        }
    }

    componentWillUnmount() {
        this.props.cleanEvent();
    }

    render() {
        return (
            <div className='page-container'>
                {component}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        event: state.event.current,
        loading: state.event.status == Status.WaitingOnServer,
        ready: state.event.status == Status.Ready
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadEvent: id => { dispatch(thunks.event.get(id)) },
        cleanEvent: () => {
            dispatch(createAction(
                EventActions.Current,
                {},
                null,
                Status.Ready
            ))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Show)