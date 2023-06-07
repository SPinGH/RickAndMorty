'use client';

import { Box, Container, SimpleGrid, Skeleton } from '@chakra-ui/react';

import { CharacterCardSkeleton } from '@/entities/Character/components';

const Loading = () => (
    <Box as='main' mb={8}>
        <Container maxW='container.xl'>
            <Skeleton height='10' width='60%' />
            <SimpleGrid py={[4, 6, 8]} gap='4' minChildWidth='min(550px, 100%)'>
                {Array(10)
                    .fill(0)
                    .map((_, index) => (
                        <CharacterCardSkeleton key={index} />
                    ))}
            </SimpleGrid>
        </Container>
    </Box>
);

export default Loading;
