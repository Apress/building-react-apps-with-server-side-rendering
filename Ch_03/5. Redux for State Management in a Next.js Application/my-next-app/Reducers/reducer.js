import { InitialState } from '../Actions/actions'

export const reducer = (state = InitialState, action) => {
    if (action.type == 'ChangeLabel') {
        return Object.assign({}, state, {
            text: action.text
        })
    }
    else {
        return state;
    }
}