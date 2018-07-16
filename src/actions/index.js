import {
    FETCH_MENU, ADD_COMMANDA, DATA_FULFILLED, ADD_PRODUCT, REMOVE_PRODUCT,
} from './constants'

export const fetchData = () => ({
    type: FETCH_MENU,
})

export const dataFulfilled = payload => ({
    type: DATA_FULFILLED,
    payload,
})

export const addComanda = payload => ({
    type: ADD_COMMANDA,
    payload,
})

export const addProduct = payload => ({
    type: ADD_PRODUCT,
    payload,
})

export const removeProduct = payload => ({
    type: REMOVE_PRODUCT,
    payload,
})
