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
    onClick: PropTypes.func.isRequired,
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
    onClick,
    id,
    agregado,
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
                        onClick={() => {
                            onClick({
                                nombre, id, precio, cantidad: 1,
                            })
                        }}
                        color={agregado ? 'danger' : 'info'}
                        fullwidth
                        outlined
                    >
                        {
                            agregado ? 'Eliminar' : 'Agregar'
                        }
                    </Button>
                </Card.Footer.Item>
            </Card.Footer>
        </Card>

    </React.Fragment>
)

CardMenu.propTypes = propTypes
CardMenu.defaultProps = defaultProps

export default CardMenu
