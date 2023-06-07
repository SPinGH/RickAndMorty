'use client';

import { Container, List, ListItem, SimpleGrid, Skeleton, Stack } from '@chakra-ui/react';

const Loading = () => {
    return (
        <Container maxW='container.xl'>
            <Stack spacing={8}>
                <Stack spacing={8}>
                    <Skeleton height='72px' width='80%' />
                    <Stack spacing={2}>
                        <Skeleton height='30px' width='40%' />
                        <Skeleton height='30px' width='35%' />
                    </Stack>
                </Stack>
            </Stack>
        </Container>
    );
};

export default Loading;
