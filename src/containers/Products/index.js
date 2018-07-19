import { connect } from 'react-redux'
import { removeProduct, downQuanty, upQuanty } from 'actions/'
import { newCommanda } from 'actions/actionCreator'
import Products from './Products'

const mapStateToProps = (state) => {
    const { cart } = state
    const { loading } = state.commandas

    return {
        cart,
        loading,
    }
}

const mapDispatchToProps = dispatch => ({
    removeProduct: id => dispatch(removeProduct(id)),
    downQuanty: id => dispatch(downQuanty(id)),
    upQuanty: id => dispatch(upQuanty(id)),
    addCommanda: product => dispatch(newCommanda(product)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Products)
