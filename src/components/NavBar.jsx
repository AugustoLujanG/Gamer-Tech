import React from 'react'
import CartWidget from './CartWidget'
import { Menu, MenuButton, MenuList, MenuItem, Image, Box, Flex, Spacer, Heading, Center, Button } from '@chakra-ui/react'
import componentes from '../images/componentes.webp'
import escritorio from '../images/escritorio.webp'
import gabinete from '../images/gabinete.webp'
import perifericos from '../images/perifericos.webp'
import silla from '../images/silla.webp'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='nav'>
            <Box>
                <Flex>
                    <Center w='100px' h='20' ml='7'>
                        <Menu>
                            <Link to={"/productos"}>
                                <Button colorScheme='teal' variant='solid'>
                                    Productos
                                </Button>
                            </Link>
                        </Menu>
                    </Center>
                    <Center h='20' ml='7'>
                        <Menu>
                            <MenuButton as={Button} bg='#4FD1C5'>
                                Categorías
                            </MenuButton>
                            <MenuList>
                                <Link to={`/category/${"Componentes"}`}>
                                    <MenuItem minH='48px'>
                                        <Image
                                            boxSize='2rem'
                                            borderRadius='full'
                                            src={componentes}
                                            alt='Componentes'
                                            mr='12px'
                                        />
                                        <span>Componentes</span>
                                    </MenuItem>
                                </Link>
                                <Link to={`/category/${"Escritorios"}`}>
                                    <MenuItem minH='40px'>
                                        <Image
                                            boxSize='2rem'
                                            borderRadius='full'
                                            src={escritorio}
                                            alt='Escritorios'
                                            mr='12px'
                                        />
                                        <span>Escritorios</span>
                                    </MenuItem>
                                </Link>
                                <Link to={`/category/${"Gabinetes"}`}>
                                    <MenuItem minH='40px'>
                                        <Image
                                            boxSize='2rem'
                                            borderRadius='full'
                                            src={gabinete}
                                            alt='Gabinetes'
                                            mr='12px'
                                        />
                                        <span>Gabinetes</span>
                                    </MenuItem>
                                </Link>
                                <Link to={`/category/${"Periféricos"}`}>
                                    <MenuItem minH='40px'>
                                        <Image
                                            boxSize='2rem'
                                            borderRadius='full'
                                            src={perifericos}
                                            alt='Periféricos'
                                            mr='12px'
                                        />
                                        <span>Periféricos</span>
                                    </MenuItem>
                                </Link>
                                <Link to={`/category/${"Sillas"}`}>
                                    <MenuItem minH='40px'>
                                        <Image
                                            boxSize='2rem'
                                            borderRadius='full'
                                            src={silla}
                                            alt='Sillas'
                                            mr='12px'
                                        />
                                        <span>Sillas</span>
                                    </MenuItem>
                                </Link>
                            </MenuList>
                        </Menu>
                    </Center>
                    <Spacer />
                    <Center w='400px' h='20'>
                        <Heading id='title' size='md'>
                            <Link to={"/"}>Gamer Tech</Link>
                        </Heading>
                    </Center>
                    <Spacer />
                    <Center w='150px' h='20'>
                        <Link to={"/cart"}>
                            <CartWidget />
                        </Link>
                    </Center>
                </Flex>
            </Box>
        </div>
    )
}

export default NavBar