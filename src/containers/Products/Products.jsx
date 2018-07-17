import React, { Component } from 'react'
import {
    Table, Button,
} from 'react-bulma-components'
import PropTypes from 'prop-types'

const propTypes = {
    cart: PropTypes.arrayOf(PropTypes.object).isRequired,
    removeProduct: PropTypes.func.isRequired,
    addQuanty: PropTypes.func.isRequired,
    addCommanda: PropTypes.func.isRequired,
}

class Products extends Component {
    handleRemove = (id) => {
        const { removeProduct } = this.props

        removeProduct(id)
    }

    handleQuantity = (product) => {
        const { addQuanty } = this.props
        addQuanty(product)
    }

    handleAddCommand = (product) => {
        const { addCommanda } = this.props

        addCommanda(product)
    }

    render() {
        const { cart } = this.props
        const styleInput = {
            borderRadius: '5px',
            border: '1px solid #ccc',
            padding: '.5rem',
            width: '40%',
        }
        return (
            <div className="products">
                <Table>
                    <tbody>
                        {
                            cart.map(product => (
                                <tr key={product.id}>
                                    <td>{product.nombre}</td>
                                    <td>
                                        <input
                                            style={styleInput}
                                            type="text"
                                            defaultValue={product.cantidad}
                                            onKeyPress={(e) => {
                                                if (e.keyCode === 13 || e.which === 13) {
                                                    this.handleQuantity({
                                                        id: product.id,
                                                        cantidad: e.target.value,
                                                    })
                                                }
                                            }}
                                        />
                                    </td>
                                    <td>
                                        <Button color="danger" onClick={() => { this.handleRemove(product.id) }}>
                                        Eliminar
                                        </Button>
                                    </td>
                                </tr>

                            ))
                        }
                        {
                            cart.length
                                ? (
                                    <tr>
                                        <td colSpan={3}>
                                            <Button color="info" onClick={() => { this.handleAddCommand(cart) }}>Generar orden</Button>
                                        </td>
                                    </tr>
                                ) : ''
                        }
                    </tbody>

                </Table>
            </div>
        )
    }
}

Products.propTypes = propTypes

export default Products
