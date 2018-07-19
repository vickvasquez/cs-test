import { connect } from 'react-redux'
import { addProduct, removeProduct, fetchingData } from 'actions/'

import {fetchData} from 'actions/actionCreator'

import Menu from './Menu'

const mapStateToProps = (state) => {
    const { menu } = state

    return {
        menu,
    }
}

const mapDispatchToProps = dispatch => ({
    fetchData: () => {
        dispatch(fetchingData())
        dispatch(fetchData())
    },
    addProduct: product => dispatch(addProduct(product)),
    removeProduct: id => dispatch(removeProduct(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
