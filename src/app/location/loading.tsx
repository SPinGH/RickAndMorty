'use client';

import { Box, Container, Stack } from '@chakra-ui/react';

import { EpisodeCardSkeleton } from '@/entities/Episode/components';

const Loading = () => (
    <Box as='main' mb={8}>
        <Container maxW='container.xl'>
            <Stack pb={[4, 6, 8]}>
                {Array(10)
                    .fill(0)
                    .map((_, index) => (
                        <EpisodeCardSkeleton key={index} />
                    ))}
            </Stack>
        </Container>
    </Box>
);

export default Loading;
