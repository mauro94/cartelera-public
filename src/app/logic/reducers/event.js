import {
    EventActions,
    Status
} from 'Config/constants'

var defaultState = {
    all: [],
    status: Status.Ready,
    error: {},
    current: {}
}

function event(state = defaultState, action) {
    switch (action.type) {
        case EventActions.All:
            return {
                ...state,
                all: action.object,
                status: action.status,
                error: action.error,
            }
        case EventActions.Current:
            return {
                ...state,
                current: action.object,
                status: action.status,
                error: action.error,
            }
    }
    return state
}

export default event