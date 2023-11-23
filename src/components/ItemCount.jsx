import React, { useState, useEffect } from 'react';
import { Button, Box, Spacer, Flex, Alert, AlertIcon, ButtonGroup, IconButton } from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons'

const ItemCount = () => {
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
        return (
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
            <ButtonGroup size='md' isAttached variant='outline'>
                <IconButton onClick={decrementar} icon={<MinusIcon />} />
                <Button>{count}</Button>
                <IconButton onClick={incrementar} icon={<AddIcon />} />
            </ButtonGroup>


        </div>
    )
}

export default ItemCount