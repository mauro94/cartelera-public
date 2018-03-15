
import { connect } from 'react-redux'
import React from 'react'
import EventDetails from 'Presentational/EventDetails'

const mapStateToProps = (state, { ...props }) => {
    return {
        event: { id: props.id, name: 'some event' }
    }
}

const Event = connect(
    mapStateToProps
)(EventDetails)

export default Event