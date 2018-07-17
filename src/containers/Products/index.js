import { connect } from 'react-redux'
import { removeProduct, addQuanty, addCommanda } from 'actions/'
import Products from './Products'

const mapStateToProps = (state) => {
    const { cart } = state

    return {
        cart,
    }
}

const mapDispatchToProps = dispatch => ({
    removeProduct: id => dispatch(removeProduct(id)),
    addQuanty: product => dispatch(addQuanty(product)),
    addCommanda: product => dispatch(addCommanda(product)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Products)
