import React from 'react'
import Share from 'Presentational/elements/Share'
import { pageDomain, pageTitle } from 'Config/helper'
import { history } from 'Config/router'

const Show = ({ event }) => {
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

export default Show