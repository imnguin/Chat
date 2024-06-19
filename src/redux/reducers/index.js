import { combineReducers } from 'redux'
import userReducer from './userReducer'
export * from './userReducer'

export const rootReducer = combineReducers({
    user: userReducer,
})