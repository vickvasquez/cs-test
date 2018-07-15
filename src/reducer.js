import { combineReducers } from 'redux'
import { FETCH_MENU, DATA_FULFILLED } from './actions/constants'

const initialState = {
    data: [],
    loading: false,
    itemMenu: {},
}

const commandas = (state = [], action) => {
    if (action.type === 'asd') { return state }
    return state
}

const menu = (state = initialState, action) => {
    if (action.type === FETCH_MENU) {
        return {
            loading: true,
        }
    } if (action.type === DATA_FULFILLED) {
        return {
            data: action.payload,
            loading: false,
        }
    }

    return state
}

const rootReducer = combineReducers({
    commandas,
    menu,
})
export default rootReducer
