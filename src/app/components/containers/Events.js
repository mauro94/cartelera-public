import React from 'react'
import { connect } from 'react-redux'
import { thunks } from 'Logic/actions/thunks'
import UpcomingView from 'Presentational/EventList'
import { Status } from 'Config/constants'
import { isEmpty } from 'Config/helper'
var Spinner = require('react-spinkit');

let component = <Spinner name="pulse" />

class Upcoming extends React.Component {
    componentWillMount() {
        if (!this.props.loading && (!this.props.event || isEmpty(this.props.event.all))) {
            this.props.loadUpcomingEvents()
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.loading && nextProps.ready) {
            if (isEmpty(nextProps.events))
                component = <div className='no-events'>No hay eventos en la base de datos</div>
            else
                component = <UpcomingView {...nextProps} />
        }
    }

    render() {
        return <div className={'event-container ' + (this.props.upcoming ? "upcoming" : "all")}>
            {component}
        </div>
    }
}

const mapStateToProps = state => {
    return {
        events: state.event.all,
        loading: state.event.status == Status.WaitingOnServer,
        ready: state.event.status == Status.Ready
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadUpcomingEvents: () => {
            dispatch(thunks.event.all())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Upcoming)