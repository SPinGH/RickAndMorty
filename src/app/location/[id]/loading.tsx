'use client';

import { Container, List, ListItem, SimpleGrid, Skeleton, Stack } from '@chakra-ui/react';

const Loading = () => {
    return (
        <Container maxW='container.xl'>
            <Stack spacing={8}>
                <Stack spacing={8}>
                    <Skeleton height='72px' width='80%' />
                    <SimpleGrid fontSize='xl' templateColumns='auto 1fr' spacing={8}>
                        <List fontWeight='semibold' spacing={2}>
                            <ListItem>Type</ListItem>
                            <ListItem>Dimension</ListItem>
                        </List>
                        <List spacing={2}>
                            <ListItem>
                                <Skeleton height='30px' width='40%' />
                            </ListItem>
                            <ListItem>
                                <Skeleton height='30px' width='35%' />
                            </ListItem>
                        </List>
                    </SimpleGrid>
                </Stack>
            </Stack>
        </Container>
    );
};

export default Loading;
