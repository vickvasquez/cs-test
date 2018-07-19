import { combineReducers } from 'redux'
import {
    FETCH_MENU,
    DATA_FULFILLED,
    ADD_PRODUCT,
    REMOVE_PRODUCT,
    DOWN_QUANTY,
    ADD_COMMANDA,
    SHOW_COMMANDS,
    HIDE_COMMANDS,
    UP_QUANTY,
    ADD_COMMANDA_SUCCESS,
} from './actions/constants'

import upQuanty from 'utils/reducer'

const initialState = {
    data: [],
    loading: true,
}

const stateCommands = {
    showCommands: false,
    data: [],
    loading: true,
}

const commandas = (state = stateCommands, action) => {
    if(action.type === ADD_PRODUCT) {
        return {
            ...state,
            loading: true,
        }
    }
    if(action.type === ADD_COMMANDA_SUCCESS) {
        return {
            ...state,
            loading: false,
        }
    }

    if (action.type === ADD_COMMANDA) {
        return {
            ...state,
            data: state
                .data
                .concat({
                    id: Math.random(),
                    status: 'abierta',
                    createdAt: new Date(),
                    products: action.payload,
                }),
        }
    }
    if (action.type === SHOW_COMMANDS) {
        return {
            ...state,
            showCommands: true,
        }
    }
    if (action.type === HIDE_COMMANDS) {
        return {
            ...state,
            showCommands: false,
        }
    }
    return state
}

const cart = (state = [], action) => {
    if (action.type === ADD_PRODUCT) {
        const index = state.findIndex(prod => prod.id === action.payload.id)

        return (index !== -1)
            ? upQuanty(state, action)
            : [
                ...state,
                action.payload,
            ]
    }

    if (action.type === REMOVE_PRODUCT) {
        return state.filter(product => product.id !== action.id)
    }

    if (action.type === DOWN_QUANTY) {
        return state.map(prod => ((prod.id === action.id)
            ? {
                ...prod,
                cantidad: prod.cantidad - 1,
            }
            : prod))
    }
    if (action.type === UP_QUANTY) {
        return upQuanty(state, action)
    }
    if (action.type === ADD_COMMANDA) {
        return []
    }
    return state
}

const menu = (state = initialState, action) => {
    if (action.type === FETCH_MENU) {
        return { loading: true }
    }
    if (action.type === DATA_FULFILLED) {
        return { comida: action.payload.comida, bebida: action.payload.bebida, loading: false }
    }
    if (action.type === ADD_PRODUCT) {
        return {
            ...state,
            comida: state
                .comida
                .map(itemMenu => ((itemMenu.id === action.payload.id)
                    ? {
                        ...itemMenu,
                        agregado: true,
                    }
                    : itemMenu)),
        }
    }

    if (action.type === REMOVE_PRODUCT) {
        return {
            ...state,
            comida: state
                .comida
                .map(itemMenu => ((itemMenu.id === action.id)
                    ? {
                        ...itemMenu,
                        agregado: false,
                    }
                    : itemMenu)),
        }
    }

    if (action.type === ADD_COMMANDA) {
        return {
            ...state,
            comida: state
                .comida
                .map(item => ({
                    ...item,
                    agregado: false,
                })),
        }
    }
    return state
}

const rootReducer = combineReducers({ commandas, menu, cart })
export default rootReducer
