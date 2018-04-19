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

function event(state = defaultState, action) {
    switch (action.type) {
        case EventActions.All:
            return {
                ...state,
                all: action.object,
                status: action.status,
                error: action.error,
                action: action.type
            }
        case EventActions.Show:
            return {
                ...state,
                show: action.object,
                status: action.status,
                error: action.error,
                action: action.type
            }
    }
    return state
}

export default event