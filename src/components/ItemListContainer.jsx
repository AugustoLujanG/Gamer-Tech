import React from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import productos from './productos.json'
import { SimpleGrid } from '@chakra-ui/react'

const ItemListContainer = () => {

    const { category } = useParams()
    const catFilter = productos.filter((producto) => producto.category === category)

    return (
        <SimpleGrid columns={{sm: 2, md: 3}} spacing='30px' spacingY='20px'>
            {category ? <ItemList productos={catFilter} /> : <ItemList productos={productos} />}
        </SimpleGrid>
    )
}

export default ItemListContainer