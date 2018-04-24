import {
    EventActions,
    Status
} from 'Config/constants'

var defaultState = {
    all: [],
    status: Status.Ready,
    error: {},
    show: {},
    action: ''
}

const getError = (action) => {
    if (action.error) {
        if (action.error.error) {
            return action.error.error
        }
        return action.error
    }
    return null
}

function event(state = defaultState, action) {
    switch (action.type) {
        case EventActions.All:
            return {
                ...state,
                all: action.object,
                status: action.status,
                error: getError(action),
                action: action.type
            }
        case EventActions.Show:
            return {
                ...state,
                show: action.object,
                status: action.status,
                error: getError(action),
                action: action.type
            }
    }
    return {
        ...state,
        status: action.status,
        action: action.type,
        error: getError(action)
    }
}

export default event