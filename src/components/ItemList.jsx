import { Container } from '@chakra-ui/react'
import React from 'react'
import Item from './Item'

const ItemList = ({ productos }) => {
    return (
        <Container>
            {productos.map((producto) => (
                <Item key={producto.id} producto={producto} />
            ))}

            {/* <Container className="main-catalogue">
                {productos?.map((producto) => (
                    <Item
                        key={producto.id}
                        id={producto.id}
                        name={producto.name}
                        description={producto.description}
                        price={producto.price}
                        stock={producto.stock}
                        category={producto.category}
                        image={producto.image}
                    ></Item>
                ))}
            </Container> */}
        </Container>
    )
}

export default ItemList