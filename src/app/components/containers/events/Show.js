import React from 'react'
import { connect } from 'react-redux'
import { thunks } from 'Logic/actions/thunks'
import { createAction } from 'Logic/actions'
import { Status, EventActions } from 'Config/constants'
import { isEmpty } from 'Config/helper'
import ShowEvent from 'Presentational/events/Show'

class Show extends React.Component {
    componentDidMount() {
        if (isEmpty(this.props.event.show)) {
            this.props.loadEvent(this.props.id)
        }
    }

    componentWillUnmount() {
        this.props.cleanEvent();
    }

    render() {
        return (
            <div className='page-container'>
                <ShowEvent
                    event={this.props.event.show}
                    hide
                    reducer={{
                        status: this.props.event.status,
                        action: this.props.event.action,
                        error: this.props.event.error
                    }}
                    action={EventActions.Show} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        event: state.event
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadEvent: id => { dispatch(thunks.event.get(id)) },
        cleanEvent: () => {
            dispatch(createAction(
                EventActions.Show,
                {},
                null,
                Status.Ready
            ))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Show)