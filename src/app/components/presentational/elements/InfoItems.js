import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { Labels } from 'Config/constants'
import { formatArray, isEmpty } from 'Config/helper'
import { infoIcon } from 'Config/icons'
import { ZoomableImage } from 'Presentational/elements/ZoomableImage'

[1,2].find

export const IconInfoCollection = (props) => (
    <div className='iconed-info'>
        {
            props.keys.map((object, index) => (
                <React.Fragment key={`icon-${index}`}>
                    <IconedInfoItem
                        linked={object.linked}
                        keys={[object.key]}
                        item={props.item}
                        text={props.item[object.key]} />
                </React.Fragment>
            ))
        }
    </div>
)

export const InfoItemContact = (props) => {
    return (
        <div className='info-item'>
            <div className='label'>
                {Labels[props.itemKey]} {props.item.contactName}
            </div>
            <div className='children'>
                {getChildren(props)}
            </div>
        </div>
    )
}

export const InfoItem = (props) => {
    if (!isEmpty(props.item[props.itemKey])) {
        return (
            <div className='info-item'>
                <div className='label'>
                    {Labels[props.itemKey]}
                </div>
                <div className='children'>
                    {getChildren(props)}
                </div>
            </div>
        )
    }
    if (props.dontValidate) {
        return (
            <div className='info-item'>
                <div className='label'>
                    {Labels[props.itemKey]}
                </div>
                <div className='children'>
                    {getChildren(props)}
                </div>
            </div>
        )
    }
    return <div></div>
}

const getChildren = (props) => {
    if (props.component) {
        return <props.component item={props.item} />
    }
    if (props.img) {
        return <ZoomableImage image={props.item[props.itemKey]} />
    }
    if (props.array) {
        return formatArray(props.item[props.itemKey])
    }
    return props.item[props.itemKey]
}

export const IconedInfoItem = (props) => {
    let itemIsEmpty = false
    props.keys.forEach(itemKey => {
        if (isEmpty(props.item[itemKey])) {
            itemIsEmpty = true
        }
    })
    if (itemIsEmpty) {
        return <div></div>
    }
    let icon
    if (props.date) {
        icon = infoIcon.date
    }
    else if (props.time) {
        icon = infoIcon.time
    }
    else if (props.icon) {
        icon = props.icon
    }
    else {
        icon = infoIcon[props.keys[0]]
    }
    let text
    if (props.array) {
        text = props.text.replace('array',
            formatArray(props.item[props.keys[0]]))
    }
    else {
        text = props.text
    }
    return (
        <div className='iconed-info-item'>
            <div className='icon'>
                <FontAwesomeIcon icon={icon} />
            </div>
            {props.linked ? 
            <a className='info linked' target="_blank" href={openLinkHelper(text)}>{text}</a> :
            <div className='info'>{text}</div>}
        </div>
    )
}

function openLinkHelper (link) {
    var linkText = link;
    if (linkText.indexOf("http://") != 0 && linkText.indexOf("https://") != 0) {
        return ("//" + link)
    }
    return link
}