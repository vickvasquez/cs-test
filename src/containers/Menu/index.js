import { connect } from 'react-redux'
import { addProduct, removeProduct, toggleMenu } from 'actions/'
import Menu from './Menu'

const mapStateToProps = (state) => {
    const { menu } = state
    const { showCommands } = state.commandas
    return {
        menu,
        showCommands,
    }
}

const mapDispatchToProps = dispatch => ({
    addProduct: product => dispatch(addProduct(product)),
    removeProduct: id => dispatch(removeProduct(id)),
    toggleMenu: type => dispatch(toggleMenu(type)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
