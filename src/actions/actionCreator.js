import { menu } from '../api'
import { dataFulfilled, addCommanda, addedCommandaSuccess } from '.'

const newCommanda = (cart) => dispatch => {
    dispatch(addCommanda(cart))
    dispatch(addedCommandaSuccess())
}

const fetchData = () => (dispatch) => {
    setTimeout(() => {
        dispatch(dataFulfilled(menu))
    }, 500)
}

export {
    newCommanda,
    fetchData,
}
