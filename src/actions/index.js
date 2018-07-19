import {
    FETCH_MENU,
    ADD_COMMANDA,
    DATA_FULFILLED,
    ADD_PRODUCT,
    REMOVE_PRODUCT,
    DOWN_QUANTY,
    UP_QUANTY,
    ADD_COMMANDA_SUCCESS,
} from './constants'

export const fetchingData = () => ({
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

export const addedCommandaSuccess = () => ({
    type: ADD_COMMANDA_SUCCESS,
})

export const addProduct = payload => ({
    type: ADD_PRODUCT,
    payload,
})

export const removeProduct = id => ({
    type: REMOVE_PRODUCT,
    id,
})

export const downQuanty = id => ({
    type: DOWN_QUANTY,
    id,
})
export const upQuanty = id => ({
    type: UP_QUANTY,
    id,
})

export const toggleMenu = type => ({
    type,
})
