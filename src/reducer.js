import { combineReducers } from 'redux'
import {
    FETCH_MENU,
    DATA_FULFILLED,
    ADD_PRODUCT,
    REMOVE_PRODUCT,
    ADD_QUANTY,
    ADD_COMMANDA,
    SHOW_COMMANDS,
    HIDE_COMMANDS,
} from './actions/constants'

const initialState = {
    data: [],
    loading: false,
    itemMenu: {},
}

const stateCommands = {
    showCommands: false,
    data: [],
}

const commandas = (state = stateCommands, action) => {
    if (action.type === ADD_COMMANDA) {
        return {
            ...state,
            data: state.data.concat({
                id: Math.random(), status: 'abierta', createdAt: new Date(), products: action.payload,
            }),
        }
    }
    if (action.type === SHOW_COMMANDS) {
        console.log('afadfadflkamsdflkansdfñaksdnfad')
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
        return [...state, action.payload]
    }
    if (action.type === REMOVE_PRODUCT) {
        return state.filter(product => product.id !== action.id)
    }

    if (action.type === ADD_QUANTY) {
        return state.map(prod => ((prod.id === action.product.id)
            ? { ...prod, cantidad: parseInt(action.product.cantidad, 10) }
            : prod))
    }
    if (action.type === ADD_COMMANDA) {
        return []
    }
    return state
}

const menu = (state = initialState, action) => {
    if (action.type === FETCH_MENU) {
        return {
            loading: true,
        }
    } if (action.type === DATA_FULFILLED) {
        return {
            comida: action.payload.comida,
            bebida: action.payload.bebida,
            loading: false,
        }
    }
    if (action.type === ADD_PRODUCT) {
        return {
            ...state,
            comida: state.comida.map(itemMenu => (
                (itemMenu.id === action.payload.id) ? { ...itemMenu, agregado: true } : itemMenu
            )),
        }
    }

    if (action.type === REMOVE_PRODUCT) {
        return {
            ...state,
            comida: state.comida.map(itemMenu => (
                (itemMenu.id === action.id) ? { ...itemMenu, agregado: false } : itemMenu
            )),
        }
    }

    if (action.type === ADD_COMMANDA) {
        return {
            ...state,
            comida: state.comida.map(item => (
                { ...item, agregado: false }
            )),
        }
    }
    return state
}

const rootReducer = combineReducers({
    commandas,
    menu,
    cart,
})
export default rootReducer
