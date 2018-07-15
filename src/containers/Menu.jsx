import React, { Component } from 'react'
import CardMenu from '../components/Menu'

class Menu extends Component {
    handleSelectMenu = (menu) => {
        console.log(menu)
    }

    render() {
        const { data } = this.props
        console.log(data)
        return (
            <CardMenu
                {...data}
            />)
    }
}

export default Menu
