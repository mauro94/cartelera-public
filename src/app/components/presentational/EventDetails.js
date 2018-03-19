import React from 'react'
import Share from 'Presentational/Share'
import { history, pageDomain, pageTitle } from 'Config/helper'

const EventDetails = ({ event }) => {
    let shareUrl = pageDomain + history.location.pathname
    let shareMsg = event.name + ' - ' + pageTitle
    return (
        <React.Fragment>
            <h1>
                {event.name}
            </h1>
            <Share url={shareUrl} message={shareMsg} />
        </React.Fragment>
    )
}

export default EventDetails