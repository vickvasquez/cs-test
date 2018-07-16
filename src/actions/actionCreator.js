import { menu } from '../api'
import { dataFulfilled } from '.'

export default () => (dispatch) => {
    dispatch(dataFulfilled(menu))
}
