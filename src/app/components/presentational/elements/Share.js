import React from 'react'
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon
} from 'react-share';

const Share = (props) => (
    <div className='social-media'>
        <FacebookShareButton
            url={props.url}
            quote={props.message}>
            <FacebookIcon
                size={32}
                round />
        </FacebookShareButton>
        <TwitterShareButton
            url={props.url}
            title={props.message}>
            <TwitterIcon
                size={32}
                round />
        </TwitterShareButton>
        <WhatsappShareButton
            url={props.url}
            title={props.message}>
            <WhatsappIcon
                size={32}
                round />
        </WhatsappShareButton>
    </div>
)

export default Share