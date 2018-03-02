import React from 'react'
import { connect } from 'react-redux'
import { thunks } from 'Logic/actions/thunks'
import UpcomingView from 'Presentational/EventList'
import { Status } from 'Config/constants'
import { isEmpty } from 'Config/helper'

let component = <p>Loading...</p>

class Upcoming extends React.Component {
    componentWillMount() {
        if (!this.props.loading && (!this.props.event || isEmpty(this.props.event.all))) {
            this.props.loadUpcomingEvents()
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.loading && nextProps.ready) {
            component = <UpcomingView {...nextProps} />
        }
    }

    render() {
        return component
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
            dispatch(thunks.event.upcoming())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Upcoming)