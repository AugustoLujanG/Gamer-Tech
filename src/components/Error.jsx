import { Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <div>Ruta indefinida -404
            <Link to="..">
                <Button>Volver al Inicio</Button>
            </Link>
        </div>
    )
}

export default Error