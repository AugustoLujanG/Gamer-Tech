import { Container } from '@chakra-ui/react'
import React from 'react'
import ItemDetail from './ItemDetail'
import productos from './productos.json'

const ItemaDetailContainer = () => {
  return (
    <Container>
      <ItemDetail productos={productos} />
    </Container>
  )
}

export default ItemaDetailContainer