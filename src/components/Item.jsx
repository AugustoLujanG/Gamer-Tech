import { Button, Card, CardBody, CardFooter, Center, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Item = ( {producto}) => {
  return (
    <div>
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
                  Stock: {producto.stock}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter className="card-footer">
              <Center className="btn-center">
                <Button variant="solid" colorScheme="blue">
                  <Link to={`/item/${producto.id}`}> Detalles</Link>
                </Button>
              </Center>
            </CardFooter>
          </Card>
        </Center>
      </div>
    </div>
  )
}

export default Item