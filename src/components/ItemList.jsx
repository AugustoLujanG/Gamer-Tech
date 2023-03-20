import { Container } from '@chakra-ui/react'
import React from 'react'
import Item from './Item'

const ItemList = ({ productos }) => {
    return (
        <>
            {productos.map((producto) => (
                <Item key={producto.id} producto={producto} />
            ))}
        </>
    )
}

export default ItemList