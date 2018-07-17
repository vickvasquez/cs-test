import {
    FETCH_MENU,
    ADD_COMMANDA,
    DATA_FULFILLED,
    ADD_PRODUCT,
    REMOVE_PRODUCT,
    ADD_QUANTY,
} from './constants'

export const fetchData = () => ({
    type: FETCH_MENU,
})

export const dataFulfilled = payload => ({
    type: DATA_FULFILLED,
    payload,
})

export const addCommanda = payload => ({
    type: ADD_COMMANDA,
    payload,
})

export const addProduct = payload => ({
    type: ADD_PRODUCT,
    payload,
})

export const removeProduct = id => ({
    type: REMOVE_PRODUCT,
    id,
})

export const addQuanty = product => ({
    type: ADD_QUANTY,
    product,
})

export const toggleMenu = type => ({
    type,
})
