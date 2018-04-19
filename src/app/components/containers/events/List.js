import React from 'react'
import { connect } from 'react-redux'
import { thunks } from 'Logic/actions/thunks'
import EventList from 'Presentational/events/List'
import { EventActions, Status } from 'Config/constants'
import { isEmpty } from 'Config/helper'
var Spinner = require('react-spinkit');

// cuantos eventos? si no hay numero, todo con pagination

class List extends React.Component {
    componentWillMount() {
        if (isEmpty(this.props.event.all)) {
            this.props.loadEvents()
        }
    }

    render() {
        return (
            <div className={'event-container ' + (this.props.upcoming ? "upcoming" : "all")}>
                <EventList
                    events={this.props.event.all}
                    hide
                    reducer={{
                        status: this.props.event.status,
                        action: this.props.event.action,
                        error: this.props.event.error
                    }}
                    action={EventActions.All} />
            </div>
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
        loadEvents: () => {
            dispatch(thunks.event.all())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)