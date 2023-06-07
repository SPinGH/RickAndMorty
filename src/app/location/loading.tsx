'use client';

import { Box, Container, SimpleGrid } from '@chakra-ui/react';

import { EpisodeCardSkeleton } from '@/entities/Episode/components';

const Loading = () => (
    <Box as='main' mb={8}>
        <Container maxW='container.xl'>
            <SimpleGrid pb={[4, 6, 8]} gap='4' minChildWidth='min(550px, 100%)'>
                {Array(10)
                    .fill(0)
                    .map((_, index) => (
                        <EpisodeCardSkeleton key={index} />
                    ))}
            </SimpleGrid>
        </Container>
    </Box>
);

export default Loading;
