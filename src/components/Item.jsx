import React, { useState, useEffect } from 'react';
import { Button, Box, Spacer, Flex, Alert, AlertIcon } from '@chakra-ui/react';


const Item = () => {
    const [count, setCount] = useState(0);
    
    const resetCount = () => {
        setCount(0)
    } 
    const incrementar = () => {
        setCount(count + 1);
    }
    const decrementar = () => {
        setCount(count - 1);
    }
    if (count < 0) {
        return(
        <Alert status='error'>
            <AlertIcon />
            No puedes tener menos productos
            <Spacer />
            <Button colorScheme='red' onClick={resetCount}> Ok</Button>
        </Alert>
        )

    } else if (count > 10) {
        return (
        <Alert status='error'>
            <AlertIcon />
            Haz alcanzado el limite de este producto
            <Spacer />
            <Button colorScheme='red' onClick={resetCount}>reset</Button>
        </Alert>
        )
    }

    return (
        <div>
            <Flex>
                <Box p='4'>
                    <h3>{count}</h3>
                </Box>
                <Spacer />
                <Box p='4'>
                    <Button colorScheme='teal' onClick={incrementar}>+</Button>
                    <Button colorScheme='teal' onClick={decrementar}>-</Button>
                </Box>
                
            </Flex>


        </div>
    )
}

export default Item

