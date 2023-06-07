'use client';

import { Container, Flex, List, ListItem, SimpleGrid, Skeleton, Stack } from '@chakra-ui/react';

const Loading = () => {
    return (
        <Container maxW='container.xl'>
            <Stack spacing={8}>
                <Flex gap={8} direction={['column', null, 'row']}>
                    <Skeleton height='300px' aspectRatio={1} alignSelf='flex-start' />
                    <Stack spacing={8} flex='1 1 auto'>
                        <Skeleton height='72px' width='80%' />
                        <SimpleGrid fontSize='xl' templateColumns='auto 1fr' spacing={8}>
                            <List fontWeight='semibold' spacing={2}>
                                <ListItem>Status</ListItem>
                                <ListItem>Species</ListItem>
                                <ListItem>Gender</ListItem>
                                <ListItem>Origin location</ListItem>
                                <ListItem>Last known location</ListItem>
                            </List>
                            <List spacing={2}>
                                <ListItem>
                                    <Skeleton height='30px' width='40%' />
                                </ListItem>
                                <ListItem>
                                    <Skeleton height='30px' width='35%' />
                                </ListItem>
                                <ListItem>
                                    <Skeleton height='30px' width='37%' />
                                </ListItem>
                                <ListItem>
                                    <Skeleton height='30px' width='42%' />
                                </ListItem>
                                <ListItem>
                                    <Skeleton height='30px' width='32%' />
                                </ListItem>
                            </List>
                        </SimpleGrid>
                    </Stack>
                </Flex>
            </Stack>
        </Container>
    );
};

export default Loading;
