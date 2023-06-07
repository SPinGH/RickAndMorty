'use client';

import { Image } from '@chakra-ui/next-js';
import { Container, Flex } from '@chakra-ui/react';

import NotFoundImage from './404.png';

const NotFound = () => {
    return (
        <Container maxW='container.xl'>
            <Flex alignItems='center' justifyContent='center'>
                <Image w='max(300px, 50%)' src={NotFoundImage} alt='404 not found' />
            </Flex>
        </Container>
    );
};

export default NotFound;
