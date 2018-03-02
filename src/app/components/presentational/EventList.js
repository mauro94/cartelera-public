import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { formatDate } from 'Config/helper'

const getRows = () => (
    Math.ceil(Math.random() * 10 + 3)
)

const Hashtag = ({ hashtag }) => (
    <Link to='/'>{"#" + hashtag}</Link>
)

const EventGridItemText = ({ event, index }) => (
    <div className="text">
        <div className="event-grid-title">{event.name}</div>
        <div className="event-grid-date">{formatDate(event.startDate)}</div>
        <div className="event-grid-hashtags">
            {event.hashtag.map(h => <Hashtag hashtag={h} key={index + "-" + h} />)}
        </div>
    </div>
)

const EventGrid = ({ events }) => {
    let lastRow = [1, 1, 1, 1]
    const eventComponents = events.map((event, index) => {
        let prevRow = lastRow[index % 4]
        let newRow = prevRow + getRows()
        lastRow[index % 4] = newRow
        let col = (index % 4) + 1
        return (
            <div
                className={"grid-item "}
                key={"item-" + event.id}
                style={
                    {
                        gridRow: prevRow + " / " + newRow,
                        gridColumn: col + " / " + col
                    }}
            >
                <div className="image">
                    <img src={event.imageUrl} />
                </div>
                <EventGridItemText event={event} index={index} />
            </div>)
    })

    return (
        <div className='event-container'>
            {eventComponents}
        </div>
    )
}

EventGrid.propTypes = {
    events: PropTypes.array
}

export default EventGrid