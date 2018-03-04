import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { formatDate } from 'Config/helper'

const EventGrid = ({ events }) => {
    return (
        <React.Fragment>
            {events.map((event, index) => (
                <EventGridItem event={event} index={index} key={"item-" + index} />
            ))}
        </React.Fragment>
    )
}

const EventGridItem = ({ event, index }) => {
    event.hashtag = ['code', 'hack', 'business']
    return <div
        className={"grid-item"}
        style={gridItemArea(index)} >
        <div className="image"><img src={event.photo} /></div>
        <div className="text">
            <div className="event-grid-title">{event.name}</div>
            <div className="event-grid-date">{formatDate(event.startDate)}</div>
            <div className="event-grid-hashtags">
                <Hashtags hashtag={event.hashtag} index={index} />
            </div>
        </div>
    </div>
}

const Hashtags = ({ hashtag, index }) => {
    try {
        return <React.Fragment> {hashtag.map(h => <Link to='/' key={"h-" + index + "-" + h}>{"#" + h}</Link>)} </React.Fragment>
    } catch (error) {
        return <Link to='/'>{"#error"}</Link>
    }
}

let lastRow = [1, 1, 1, 1]
const gridItemArea = (index) => {
    let prevRow = lastRow[index % 4]
    let newRow = prevRow + Math.ceil(Math.random() * 10 + 3)
    let column = (index % 4) + 1
    lastRow[index % 4] = newRow

    return {
        gridRow: prevRow + " / " + newRow,
        gridColumn: column + " / " + column
    }
}

EventGrid.propTypes = {
    events: PropTypes.array
}

export default EventGrid