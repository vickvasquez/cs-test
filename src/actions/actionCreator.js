import { menu } from '../api'
import { dataFulfilled } from './actions'

export default () => (dispatch) => {
    dispatch(dataFulfilled(menu))
}
