import { connect } from 'react-redux'
import {toggleMenu} from 'actions/'
import App from './App'

const mapStateToProps = (state) => {
    const { showCommands } = state.commandas

    return {
        showCommands,
    }
}

const mapDispatchToProps = dispatch => ({
    toggleMenu: type => dispatch(toggleMenu(type)),
})
export default connect(mapStateToProps, mapDispatchToProps)(App)
