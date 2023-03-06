import React from 'react'
import CartWidget from './CartWidget'
import { Menu, MenuButton, MenuList, MenuItem, Image, Box, Flex, Spacer, Heading } from '@chakra-ui/react'
import componentes from '../images/componentes.webp'
import escritorio from '../images/escritorio.webp'
import gabinete from '../images/gabinete.webp'
import perifericos from '../images/perifericos.webp'
import silla from '../images/silla.webp'

const NavBar = () => {
    return (
        <div className='nav'>
            <Box>
                <Flex>
                    <Box w='70px' h='10' p='4'>
                        <Menu>
                            <MenuButton>
                                Categorías
                            </MenuButton>
                            <MenuList>
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
                            </MenuList>
                        </Menu>
                    </Box>
                    <Spacer />
                    <Box w='400px' h='10' p='4'>
                        <Heading id='title' size='md'>Gamer Tech</Heading>
                    </Box>
                    <Spacer />
                    <Box w='150px' h='10' p='4'>
                        <CartWidget />
                    </Box>
                </Flex>
            </Box>
        </div>
    )
}

export default NavBar