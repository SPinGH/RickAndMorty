'use client';

import { Link } from '@chakra-ui/next-js';
import { Button, Container, Flex, Heading, Image, List, ListItem, SimpleGrid, Stack } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import NextLink from 'next/link';
import { FC } from 'react';

import { EPISODE_ROUTE, LOCATION_ROUTE } from '@/constants';
import { Character, getCharacter } from '@/entities/Character';
import { getIdFromUrl } from '@/shared/lib';

interface CharacterPageProps {
    character: Character;
}

const CharacterPage: FC<CharacterPageProps> = (props) => {
    const { data: character } = useQuery({
        queryKey: ['character', props.character.id],
        queryFn: () => getCharacter(props.character.id.toString()),
        initialData: props.character,
    });

    return (
        <Container maxW='container.xl'>
            <Stack spacing={8}>
                <Flex gap={8}>
                    <Image src={character.image} alt={character.name} />
                    <Stack spacing={8}>
                        <Heading as='h1' size='4xl'>
                            {character.name}
                        </Heading>
                        <SimpleGrid fontSize='xl' templateColumns='auto 1fr' spacing={8}>
                            <List fontWeight='semibold' spacing={2}>
                                <ListItem>Status</ListItem>
                                <ListItem>Species</ListItem>
                                {character.type && <ListItem>Type</ListItem>}
                                <ListItem>Gender</ListItem>
                                <ListItem>Origin location</ListItem>
                                <ListItem>Last known location</ListItem>
                            </List>
                            <List spacing={2}>
                                <ListItem>{character.status}</ListItem>
                                <ListItem>{character.species}</ListItem>
                                {character.type && <ListItem>{character.type}</ListItem>}
                                <ListItem>{character.gender}</ListItem>
                                <ListItem>
                                    <Link
                                        as={NextLink}
                                        href={`${LOCATION_ROUTE}/${getIdFromUrl(character.origin.url)}`}>
                                        {character.origin.name}
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link
                                        as={NextLink}
                                        href={`${LOCATION_ROUTE}/${getIdFromUrl(character.location.url)}`}>
                                        {character.location.name}
                                    </Link>
                                </ListItem>
                            </List>
                        </SimpleGrid>
                    </Stack>
                </Flex>
                <Heading size='xl'>Episodes</Heading>
                <Flex gap={4} wrap='wrap'>
                    {character.episode.map((episode) => {
                        const id = getIdFromUrl(episode);
                        return (
                            <Button as={NextLink} key={id} href={`${EPISODE_ROUTE}/${id}`}>
                                {id}
                            </Button>
                        );
                    })}
                </Flex>
            </Stack>
        </Container>
    );
};

export default CharacterPage;
