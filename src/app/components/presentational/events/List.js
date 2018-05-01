import React from 'react'
import { Link } from 'react-router-dom'
import { eventDates, eventTime, randomInt } from 'Config/helper'
import { Hashtags } from 'Presentational/elements'
import load from 'Containers/Load'

let lastRow = [], maxRowHeight, minRowHeight

const EventList = ({ events }) => {
    lastRow = [1, 1, 1, 1]
    maxRowHeight = 12
    minRowHeight = 6
    return (
        <React.Fragment>
            {events.map((event, index) => (
                <EventListItem
                    event={event}
                    index={index}
                    key={"item-" + index} />
            ))}
        </React.Fragment>
    )
}

const EventListItem = ({ event, index }) => {
    event.hashtag = ['code', 'hack', 'business']
    return (
        <Link
            to={'/eventos/' + event.id}
            className={"grid-item"}
            style={gridItemArea(index)}>
            <div className="image">
                <img src={event.photo}
                    className={event.cancelled ? 'cancelled' : ''} />
                <div className='grid-item-overlay'></div>
                {event.cancelled && <div className="cancelled-flag">Cancelado</div>}
            </div>
            <div className="text">
                <div className="event-grid-title">{event.name}</div>
                <div className="event-grid-date">{eventDates(event.startDatetime, event.endDatetime)}</div>
                <div className="event-grid-time">{eventTime(event.startDatetime, event.endDatetime)}</div>
                <div className="event-grid-hashtags">
                    {event.tagNames &&
                        <Hashtags hashtag={event.tagNames} index={index} />}
                </div>
            </div>
        </Link>
    )
}

const gridItemArea = (index) => {
    let prevRow = lastRow[index % 4]
    let newRow = randomInt(minRowHeight, maxRowHeight)
    let column = (index % 4) + 1
    lastRow[index % 4] = newRow
    if (column == 4) {
        maxRowHeight = Math.max(...lastRow) + 10
        minRowHeight = maxRowHeight - 6
    }
    return {
        gridRowEnd: `span ${newRow - prevRow}`
    }
}

export default load('events', EventList)