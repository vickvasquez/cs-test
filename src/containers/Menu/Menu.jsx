import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    Columns, Heading, Loader
} from 'react-bulma-components'
import CardMenu from 'components/Menu'
import Products from 'containers/Products'

const propTypes = {
    addProduct: PropTypes.func.isRequired,
    removeProduct: PropTypes.func.isRequired,
    menu: PropTypes.objectOf(PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.bool,
        ])).isRequired,
}

class Menu extends Component {
    componentDidMount = () => {
        const { fetchData } = this.props
        fetchData()
    }

    handleAdd = (product) => {
        const { addProduct } = this.props
        addProduct(product)
    }

    toggleMenu = (type) => {
        const { toggleMenu } = this.props
        toggleMenu(type)
    }

    render() {
        const { menu: { comida, loading } } = this.props
        return (
            <React.Fragment>
                {
                    loading ?
                        <React.Fragment>
                            <p className="loader-override"> Cargando datos.. </p>
                            <Loader  style={{margin: '0 auto'}}/>
                        </React.Fragment>
                        :
                        <React.Fragment>
                            <Heading> Menu </Heading>
                            <Columns>
                                <Columns.Column size={8}>
                                    <Columns>
                                        {
                                            comida.map(card => (
                                                <Columns.Column size={4} key={card.id}>
                                                    <CardMenu
                                                        {...card}
                                                        handleAdd={this.handleAdd}
                                                    />
                                                </Columns.Column>
                                            ))
                                        }
                                    </Columns>
                                </Columns.Column>
                                <Columns.Column>
                                    <Products />
                                </Columns.Column>
                            </Columns>
                        </React.Fragment>
                }
            </React.Fragment>
        )
    }
}

Menu.propTypes = propTypes
export default Menu
