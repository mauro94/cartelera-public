import * as event from './event'
export var actions = {
    event: event
}

export function createAction(type, object, error = {}, status) {
    return {
        type: type,
        object: object,
        error: error,
        status: status
    }
}