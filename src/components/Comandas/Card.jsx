import React from 'react'
import { Box, Media } from 'react-bulma-components'
import PropTypes from 'prop-types'

import './styles.css'

const propTypes = {
    products: PropTypes.arrayOf(PropTypes.string, PropTypes.number).isRequired,
}

const CardComanda = ({ products }) => (
    <React.Fragment>
        {
            products.map(product => (
                <Box key={product.id}>
                    <Media>
                        <Media.Item renderAs="figure" size={64} position="left">
                            <img className="img" src={product.imagen} alt="" />
                        </Media.Item>
                        <Media.Item>
                            <span>{product.nombre}</span>
                            <span>{product.cantidad}</span>
                            <span>${product.precio.toFixed(2)}</span>
                        </Media.Item>
                    </Media>
                </Box>
            ))
        }
    </React.Fragment>
)

CardComanda.propTypes = propTypes

export default CardComanda
