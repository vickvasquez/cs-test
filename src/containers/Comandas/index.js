import { connect } from 'react-redux'
import Comandas from './Comandas'

const mapStateToProps = (state) => {
    const { commandas } = state

    return {
        commandas,
    }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Comandas)
