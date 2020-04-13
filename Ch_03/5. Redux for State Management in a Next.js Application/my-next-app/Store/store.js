import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { reducer } from '../Reducers/reducer'
import { InitialState } from '../Actions/actions.js'

export const initStore = (initialState = InitialState) => {
    return createStore(reducer, initialState, applyMiddleware(thunkMiddleware))
}