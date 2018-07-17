import React from 'react'
import PropTypes from 'prop-types'
import { Card, Columns, Heading } from 'react-bulma-components'
import CardComanda from 'components/Comandas'

const propTypes = {
    commandas: PropTypes.arrayOf(PropTypes.object).isRequired,
}
const Commandas = ({ commandas: { data } }) => (
    <React.Fragment>
        <Heading size={6}>
            Listado de comandas
        </Heading>
        <Columns>{
            data.length
                ? data.map((comanda, index) => (
                    <Columns.Column size={6}>
                        <Card>
                            <Card.Content>
                                <Heading size={3}>Comanda {(index + 1)}</Heading>
                                <CardComanda {...comanda} key={comanda.id} />
                            </Card.Content>
                        </Card>
                    </Columns.Column>
                ))
                : ''
        }
        </Columns>
    </React.Fragment>
)

Commandas.propTypes = propTypes

export default Commandas
