'use client';

import { Box, Container, Flex, Skeleton } from '@chakra-ui/react';

import { CharacterCardSkeleton } from '@/entities/Character/components';

const Loading = () => (
    <Box as='main' mb={8}>
        <Container maxW='container.xl'>
            <Skeleton height='10' width='60%' />
            <Flex py={[4, 6, 8]} gap={6} wrap='wrap' justifyContent='center'>
                {Array(10)
                    .fill(0)
                    .map((_, index) => (
                        <CharacterCardSkeleton key={index} />
                    ))}
            </Flex>
        </Container>
    </Box>
);

export default Loading;
