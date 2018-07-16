import { connect } from 'react-redux'
import { addProduct } from 'actions/'
import Menu from './Menu'

const mapStateToProps = (state) => {
    const { menu } = state

    return {
        menu,
    }
}

const maDispatchToprops = dispatch => ({
    addProduct: produc => dispatch(addProduct(produc)),
})
export default connect(mapStateToProps, maDispatchToprops)(Menu)
