'use client';

import { Box, Container, Heading, List, ListItem, SimpleGrid, useColorModeValue } from '@chakra-ui/react';
import { FC } from 'react';

import { Character } from '@/entities/Character';
import { CharacterCard } from '@/entities/Character/components';

interface HomePageProps {
    characters: Character[] | null;
}

const HomePage: FC<HomePageProps> = ({ characters }) => {
    return (
        <Box as='main'>
            <Container maxW='container.xl'>
                <Heading as='h1' size={['2xl', '3xl', '4xl']} fontWeight='extrabold' textAlign='center' py='1em'>
                    The Rick and Morty
                </Heading>
            </Container>

            <Box py={[4, 6, 8]} bg={useColorModeValue('gray.800', 'gray.700')}>
                <Container maxW='container.xl'>
                    <SimpleGrid as={List} gap={6} minChildWidth='min(550px, 100%)' justifyContent='center'>
                        {characters?.map((character) => (
                            <ListItem key={character.id}>
                                <CharacterCard character={character} />
                            </ListItem>
                        ))}
                    </SimpleGrid>
                </Container>
            </Box>
        </Box>
    );
};
export default HomePage;
