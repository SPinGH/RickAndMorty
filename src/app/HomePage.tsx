'use client';

import { Box, Container, Flex, Heading, useColorModeValue } from '@chakra-ui/react';
import { FC } from 'react';

import { Character } from '@/entities/Character';
import { CharacterCard } from '@/entities/Character/components';

interface HomePageProps {
    characters?: Character[];
}

const HomePage: FC<HomePageProps> = ({ characters }) => {
    return (
        <Box as='main'>
            <Container maxW='container.lg'>
                <Heading as='h1' size={['2xl', '3xl', '4xl']} fontWeight='extrabold' textAlign='center' py='1em'>
                    The Rick and Morty
                </Heading>
            </Container>

            <Flex
                bg={useColorModeValue('gray.800', 'gray.700')}
                p={[4, 6, 8]}
                gap={6}
                wrap='wrap'
                justifyContent='center'>
                {characters?.map((character) => (
                    <CharacterCard key={character.id} character={character} />
                ))}
            </Flex>
        </Box>
    );
};
export default HomePage;
