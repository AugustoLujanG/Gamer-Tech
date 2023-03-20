import { ButtonGroup, Button, Input } from '@chakra-ui/react';
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

    function handleChange(event) {
        const value = event.target.value;
        if (!isNaN(value) && parseInt(value) >= 0) {
            setContador(parseInt(value));
        } else {
            setContador(0);
        }
    }
    function handleKeyDown(event) {
        if (event.key === "Backspace" && contador === 0) {
            event.preventDefault();
            setContador(0);
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
                <Input
                    type="text"
                    pattern="\d*"
                    inputMode="numeric"
                    value={contador === 0 ? "" : contador}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                />
                <Button colorScheme="red" onClick={restar}>-</Button>
            </ButtonGroup>
            <Button colorScheme="#FF5733" bg="#4299E1" ml="20px" onClick={onADd}>Agregar al carrito</Button>
        </>
    )
}

export default ItemCount