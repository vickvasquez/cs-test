import { connect } from 'react-redux'
import Menu from './Menu'

const mapStateToProps = (state) => {
    const { data } = state.menu

    return {
        data,
    }
}
export default connect(mapStateToProps)(Menu)
