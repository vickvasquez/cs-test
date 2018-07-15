import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
    comida: PropTypes.arrayOf(PropTypes.object).isRequired,
    bebida: PropTypes.arrayOf(PropTypes.object).isRequired,
}
const CardMenu = ({ comida, bebida }) => (
    <div className="card">
        <p> { comida[ 0 ].nombre }</p>
        <p> { bebida[ 0 ].nombre }</p>
    </div>
)

CardMenu.propTypes = propTypes

export default CardMenu
