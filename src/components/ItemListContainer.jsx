import React from 'react'
import { useParams } from 'react-router-dom'
import ItemCount from './ItemCount'
import ItemList from './ItemList'
import productos from './productos.json'

const ItemListContainer = () => {
    // const products = productos
    // const getProductos = () => {
    //     return new Promise((resolve, reject) => {
    //         if (products.length === 0) {
    //             reject(new Error("No hay productos"))
    //         }
    //         setTimeout(() => {
    //             resolve(products)
    //         }, 2000)
    //     })
    // }

    // async function fetchingProducts() {
    //     try {
    //         const productsFetched = await getProductos()
    //         console.log(productsFetched)
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

    // fetchingProducts()

    const { category } = useParams()
    const catFilter = productos.filter((producto) => producto.category === category)

    return (
        <div>
            {category ? <ItemList productos={catFilter} /> : <ItemList productos={productos} />}
            {/* <ItemList productos={productos}></ItemList> */}
        </div>
    )
}

export default ItemListContainer