import { combineReducers } from 'redux'
import {
    FETCH_MENU, DATA_FULFILLED, ADD_PRODUCT, REMOVE_PRODUCT,
} from './actions/constants'

const initialState = {
    data: [],
    loading: false,
    itemMenu: {},
}

const stateProducts = {
    cantidad: 0,
    precio: 0,
    nombre: '',
    id: 0,
    descripcion: 0,
}

const stateCommandas = {
    id: 0,
    createtAt: '',
    status: '',
}

const commandas = (state = stateCommandas, action) => {
    if (action.type === 'asd') { return state }
    return state
}

const cart = (state = [], action) => {
    if (action.type === ADD_PRODUCT) {
        return [...state, action.payload]
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
            comida: state.data.comida.map(itemMenu => (
                (itemMenu.id === action.payload.id) ? { ...itemMenu, agregado: false } : itemMenu
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
