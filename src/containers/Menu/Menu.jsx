import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    Columns, Container, Heading, Navbar, Button,
} from 'react-bulma-components'
import CardMenu from 'components/Menu'
import Products from 'containers/Products'
import Comandas from 'containers/Comandas'

const propTypes = {
    addProduct: PropTypes.func.isRequired,
    removeProduct: PropTypes.func.isRequired,
    showCommands: PropTypes.bool.isRequired,
    menu: PropTypes.oneOfType(PropTypes.array, PropTypes.bool).isRequired,
}

class Menu extends Component {
    handleAdd = (product) => {
        const { addProduct } = this.props
        addProduct(product)
    }

    handleRemove = (id) => {
        const { removeProduct } = this.props

        removeProduct(id)
    }

    toggleMenu = (type) => {
        const { toggleMenu } = this.props
        toggleMenu(type)
    }

    render() {
        const { menu: { comida }, showCommands } = this.props
        return (
            <div className="main">
                <Navbar>
                    <Navbar.Menu>
                        <Navbar.Container>
                            <Navbar.Item>
                                <Button onClick={
                                    () => {
                                        this.toggleMenu('HIDE_COMMANDS')
                                    }
                                }
                                >
                        Menu
                                </Button>

                            </Navbar.Item>
                            <Navbar.Item>
                                <Button onClick={() => { this.toggleMenu('SHOW_COMMANDS') }}>
                                Comandas
                                </Button>

                            </Navbar.Item>
                        </Navbar.Container>
                    </Navbar.Menu>
                </Navbar>
                <Container fluid>
                    {
                        showCommands ? <Comandas />
                            : (
                                <React.Fragment>

                                    <Heading> Menu </Heading>
                                    <Columns>
                                        <Columns.Column size={8}>
                                            <Columns>
                                                {
                                                    comida.map(card => (
                                                        <Columns.Column size={4}>
                                                            <CardMenu
                                                                key={card.id}
                                                                {...card}
                                                                handleAdd={this.handleAdd}
                                                                handleRemove={this.handleRemove}
                                                            />
                                                        </Columns.Column>
                                                    ))
                                                }
                                            </Columns>
                                        </Columns.Column>
                                        <Columns.Column>
                                            <Heading size={5}> Platillos escogidos </Heading>
                                            <Products />
                                        </Columns.Column>
                                    </Columns>
                                </React.Fragment>
                            )
                    }
                </Container>
            </div>
        )
    }
}

Menu.propTypes = propTypes
export default Menu
