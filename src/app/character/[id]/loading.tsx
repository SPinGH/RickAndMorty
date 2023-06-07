'use client';

import { Box, Container, Flex, Skeleton, Stack } from '@chakra-ui/react';

const Loading = () => {
    return (
        <Box as='main' mb={8}>
            <Container maxW='container.xl'>
                <Stack spacing={8}>
                    <Flex gap={8} direction={['column', null, 'row']}>
                        <Skeleton height='300px' aspectRatio={1} alignSelf='flex-start' />
                        <Stack spacing={8} flex='1 1 auto'>
                            <Skeleton height='72px' width='80%' />
                            <Stack spacing={2}>
                                <Skeleton height='30px' width='40%' />
                                <Skeleton height='30px' width='35%' />
                                <Skeleton height='30px' width='37%' />
                                <Skeleton height='30px' width='42%' />
                                <Skeleton height='30px' width='32%' />
                            </Stack>
                        </Stack>
                    </Flex>
                </Stack>
            </Container>
        </Box>
    );
};

export default Loading;
