import React from 'react'
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon
} from 'react-share';
import { history, pageDomain } from 'Config/helper'

const EventDetails = ({ event }) => {
    return (
        <div className='page-container'>
            <h1>
                {event.name}
            </h1>
            <div className='social-media'>
                <FacebookShareButton
                    url={pageDomain + history.location.pathname}
                    quote={event.name}>
                    <FacebookIcon
                        size={32}
                        round />
                </FacebookShareButton>
                <TwitterShareButton
                    url={pageDomain + history.location.pathname}
                    title={event.name}>
                    <TwitterIcon
                        size={32}
                        round />
                </TwitterShareButton>
                <WhatsappShareButton
                    url={pageDomain + history.location.pathname}
                    title={event.name}>
                    <WhatsappIcon
                        size={32}
                        round />
                </WhatsappShareButton>
            </div>
        </div>
    )
}

export default EventDetails