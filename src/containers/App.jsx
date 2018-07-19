import React from 'react'
import PropTypes from 'prop-types'
import { Navbar, Container, Button } from 'react-bulma-components'
import Menu from 'containers/Menu'
import Commandas from 'containers/Comandas'

const propTypes = {
    showCommands: PropTypes.bool.isRequired,
    toggleMenu: PropTypes.func.isRequired,
}

const App = ({ showCommands, toggleMenu }) => (
    <div className="main">
        <Container fluid>
            <Navbar>
                <Navbar.Menu>
                    <Navbar.Container>
                        <Navbar.Item>
                            <Button onClick={
                                () => {
                                    toggleMenu('HIDE_COMMANDS')
                                }
                            }
                            >
                                Menu
                            </Button>

                        </Navbar.Item>
                        <Navbar.Item>
                            <Button onClick={() => { toggleMenu('SHOW_COMMANDS') }}>
                                Comandas
                            </Button>
                        </Navbar.Item>
                    </Navbar.Container>
                </Navbar.Menu>
            </Navbar>
            {
                showCommands ?  <Commandas /> : <Menu />
            }
        </Container>
    </div>
)

App.propTypes = propTypes

export default App
