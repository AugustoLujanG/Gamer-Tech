import React from 'react'
import { Button, Card, CardBody, CardFooter, Center, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import ItemCount from './ItemCount'

const ItemDetail = ({productos}) => {
  const { id } = useParams()
  const productFilter = productos.filter((producto) => producto.id == id)

  return (
    <div>
      {productFilter.map((producto) => (
    <div key={producto.id}>
      <Center p="1rem">
        <Card className="card-main">
          <CardBody>
            <Image borderradius="lg" src={producto.image} />
            <Stack mt="6" spacing="3">
              <Heading size="md">{producto.name}</Heading>
              <Text color="blue.800" fontSize="l">
                Categoría: {producto.category}
              </Text>
              <Text color="blue.800" fontSize="l">
                Descripción: {producto.description}
              </Text>
              <Text color="blue.800" fontSize="xl">
                Stock: {producto.stock}
              </Text>
              <Text color="green.600" fontSize="xl">
                Precio: ${producto.price}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter className="card-footer">
            <Center>
              <ItemCount>
              </ItemCount>
            </Center>
          </CardFooter>
        </Card>
      </Center>
    </div>
      ))}
  </div>
  )
}

export default ItemDetail