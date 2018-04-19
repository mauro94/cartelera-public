import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { Labels } from 'Config/constants'
import { formatArray, isEmpty } from 'Config/helper'
import { infoIcon } from 'Config/icons'

export const IconInfoCollection = (props) => (
    <div className='iconed-info'>
        {
            props.keys.map((key, index) => (
                <React.Fragment key={`icon-${index}`}>
                    <IconedInfoItem
                        keys={[key]}
                        item={props.item}
                        text={props.item[key]} />
                </React.Fragment>
            ))
        }
    </div>
)

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
        return <img src={props.item[props.itemKey]} />
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
            <div className='info'>{text}</div>
        </div>
    )
}