import { ButtonGroup, Button } from '@chakra-ui/react';
import React from 'react'
import { useState } from "react"

const ItemCount = () => {
    const [contador, setContador] = useState(0);

    const restar = () => {
        if (contador < 1) {
            alert("No puede ingresar cantidades negativas");
        } else {
            setContador(contador - 1);
        }
    }

    const onADd = () => {
        console.log("Agregado al carrito")
        setContador(0)
    }
    return (
        <>
            <ButtonGroup>
                <Button colorScheme="green" onClick={() => setContador(contador + 1)}>+</Button>
                <h2>{contador}</h2>
                <Button colorScheme="red" onClick={restar}>-</Button>
                <Button onClick={onADd}>Agregar al carrito</Button>
            </ButtonGroup>
        </>
    )
}

export default ItemCount