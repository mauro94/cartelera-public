import React from 'react'
import { Link } from 'react-router-dom'
import { Hash } from 'crypto';

const Hashtags = ({ hashtag, index }) => {
    return (
        <React.Fragment>
            {hashtag.map(h =>
                <Link to='/' key={"h-" + index + "-" + h}>
                    {"#" + h}
                </Link>
            )}
        </React.Fragment>
    )
}

export default Hashtags