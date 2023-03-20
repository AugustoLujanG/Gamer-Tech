import React from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import productos from './productos.json'

const ItemListContainer = () => {

    const { category } = useParams()
    const catFilter = productos.filter((producto) => producto.category === category)

    return (
        <div>
            {category ? <ItemList productos={catFilter} /> : <ItemList productos={productos} />}
        </div>
    )
}

export default ItemListContainer