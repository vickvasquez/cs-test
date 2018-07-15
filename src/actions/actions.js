import { FETCH_MENU, ADD_COMMANDA, DATA_FULFILLED } from './constants'

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
