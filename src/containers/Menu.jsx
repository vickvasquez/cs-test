import React, { Component } from 'react'
import { Container, Columns } from 'react-bulma-components/full'
import PropTypes from 'prop-types'
import CardMenu from 'components/Menu'

const propTypes = {
    menu: PropTypes.arrayOf(PropTypes.object).isRequired,
    bebida: PropTypes.arrayOf(PropTypes.object).isRequired,
    addProduct: PropTypes.func.isRequired,
}

class Menu extends Component {
    handleSelectMenu = (product) => {
        // eslint-disable-next-line
        if (confirm('Estas apunto de agregar este platillo' + product.nombre)) {
            console.log(`Producto agregado${ product.nombre }`)
            // Hacer aqui el dispatch,

            const { addProduct } = this.props

            addProduct(product)
        }
    }

    render() {
        const { menu: { comida } } = this.props
        return (
            <Container fluid>
                <Columns breakpoint="tablet">
                    {
                        comida.map(cm => (
                            <Columns.Column size={3}>
                                <CardMenu
                                    key={cm.id}
                                    {...cm}
                                    onClick={this.handleSelectMenu}
                                />
                            </Columns.Column>
                        ))
                    }
                </Columns>
            </Container>
        )
    }
}

Menu.propTypes = propTypes

export default Menu
