import { EventActions, Status } from 'Config/constants'
import { createAction } from 'Logic/actions'

export const showRegister = () => {
    dispatch(createAction(EventActions.Register, null, null, Status.WaitingOnUser))
}

export const hideRegister = () => {
    dispatch(createAction(EventActions.Register, null, null, Status.Ready))
}