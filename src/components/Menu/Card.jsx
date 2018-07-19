import React from 'react'
import PropTypes from 'prop-types'
import {
    Card, Heading, Content, Level,
    Button,
} from 'react-bulma-components/full'

const propTypes = {
    nombre: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired,
    imagen: PropTypes.string,
    handleAdd: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    agregado: PropTypes.bool,
}

const defaultProps = {
    imagen: '',
    agregado: false,
}
const CardMenu = ({
    nombre,
    descripcion,
    precio,
    imagen,
    handleAdd,
    id,
}) => (
    <React.Fragment>
        <Card>
            <Card.Image src={imagen} />
            <Card.Content>
                <Heading size={6}>{nombre}</Heading>
                <Content>
                    <Level>
                        <p> { descripcion } </p>
                        <p>${ precio.toFixed(2) }</p>
                    </Level>
                </Content>
            </Card.Content>
            <Card.Footer>
                <Card.Footer.Item>
                    <Button
                        color="info"
                        fullwidth
                        outlined
                        onClick={() => {
                            handleAdd({
                                nombre,
                                id,
                                precio,
                                cantidad: 1,
                                imagen,
                            })
                        }}
                    >
                                Agregar
                    </Button>

                </Card.Footer.Item>
            </Card.Footer>
        </Card>

    </React.Fragment>
)

CardMenu.propTypes = propTypes
CardMenu.defaultProps = defaultProps

export default CardMenu
