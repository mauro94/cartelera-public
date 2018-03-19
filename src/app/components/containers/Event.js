
import { connect } from 'react-redux'
import React from 'react'
import EventDetails from 'Presentational/EventDetails'
import { thunks } from 'Logic/actions/thunks'
import { Status } from 'Config/constants'
import { isEmpty } from 'Config/helper'
var Spinner = require('react-spinkit');

let component = <Spinner name="pulse" />

class Event extends React.Component {
    componentWillMount() {
        if (!this.props.loading && isEmpty(this.props.event)) {
            this.props.loadEvent(this.props.id)
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.loading && nextProps.ready) {
            if (isEmpty(nextProps.event))
                component = <div className='no-events'>
                    No hay existe el evento en la base de datos</div>
            else
                component = <EventDetails event={nextProps.event} />
        }
    }

    render() {
        return (
            <div className={'event-container ' +
                (this.props.upcoming ? "upcoming" : "all")}>
                {component}
            </div>)
    }
}

const mapStateToProps = state => {
    return {
        event: state.event.current,
        loading: state.event.status == Status.WaitingOnServer,
        ready: state.event.status == Status.Ready
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadEvent: id => { dispatch(thunks.event.get(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Event)