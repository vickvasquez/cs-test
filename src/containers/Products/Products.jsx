import React, { Component } from 'react'
import {
    Table, Heading, Button,
} from 'react-bulma-components'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import PropTypes from 'prop-types'


const propTypes = {
    cart: PropTypes.arrayOf(PropTypes.object).isRequired,
    removeProduct: PropTypes.func.isRequired,
    downQuanty: PropTypes.func.isRequired,
    // upQuanty: PropTypes.func.isRequired,
    addCommanda: PropTypes.func.isRequired,
}

class Products extends Component {
    componentWillReceiveProps = (nextProps) => {
        if(nextProps.loading === false) {
            toast.success('Se ha agregado correctamente')
        }
    }
    handleRemove = (id) => {
        const { removeProduct } = this.props
        // eslint-disable-next-line
        if (confirm('Estas apunto de eliminar este platillo ¿ Deseas continuar?')) { removeProduct(id) }
    }

    handleQuantity = (product) => {
        const { downQuanty } = this.props
        downQuanty(product)
    }

    handleAddCommand = (cart) => {
        const { addCommanda } = this.props

        // eslint-disable-next-line
        if (confirm('¿ Datos correctos ?')) {
            addCommanda(cart)
        }
    }
/*
    upQuanty = (id) => {
        const { upQuanty } = this.props

        upQuanty(id)
    } */

    render() {
        const { cart } = this.props

        return (
            <div className="products">
                <Heading size={5}> Platillos escogidos </Heading>
                <ToastContainer />
                <Table>
                    <tbody>
                        {
                            cart.map(product => (
                                <tr key={product.id}>
                                    <td>{product.nombre}</td>
                                    <td>
                                        {product.cantidad}
                                    </td>
                                    <td>
                                        <Button
                                            outlined
                                            disabled={product.cantidad <=1}
                                            color="primary"
                                            onClick={() => { this.handleQuantity(product.id)}}
                                        >
                                            Restar
                                        </Button>
                                    </td>
                                    <td>
                                    { /*
                                        <Button
                                            outlined
                                            color="primary"
                                            onClick={() => { this.upQuanty(product.id)}}
                                        >
                                            Agregar
                                        </Button> */
                                    }
                                    </td>
                                    <td>
                                        <Button outlined color="danger" onClick={() => { this.handleRemove(product.id) }}>
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
