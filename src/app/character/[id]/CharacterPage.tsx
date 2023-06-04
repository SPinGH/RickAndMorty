'use client';
import { Link } from '@chakra-ui/next-js';
import { Box, Button, Container, Flex, Heading, Image, List, ListItem, SimpleGrid, Stack } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import NextLink from 'next/link';
import { FC } from 'react';

import { EPISODE_ROUTE, LOCATION_ROUTE } from '@/constants';
import { Character, getCharacter } from '@/entities/Character';
import { getIdFromUrl } from '@/shared/lib';

interface CharacterPageProps {
    character: Character;
}

const CharacterPage: FC<CharacterPageProps> = ({ character }) => {
    const { data } = useQuery({
        queryKey: ['character', character.id],
        queryFn: () => getCharacter(character.id.toString()),
        initialData: character,
    });

    return (
        <Container maxW='container.xl'>
            <Stack spacing={8}>
                <Flex gap={8}>
                    <Image src={data.image} alt={data.name} />
                    <Stack spacing={8}>
                        <Heading as='h1' size='4xl'>
                            {data.name}
                        </Heading>
                        <SimpleGrid fontSize='xl' templateColumns='auto 1fr' spacing={8}>
                            <List fontWeight='semibold' spacing={2}>
                                <ListItem>Status</ListItem>
                                <ListItem>Species</ListItem>
                                {data.type && <ListItem>Type</ListItem>}
                                <ListItem>Gender</ListItem>
                                <ListItem>Origin location</ListItem>
                                <ListItem>Last known location</ListItem>
                            </List>
                            <List spacing={2}>
                                <ListItem>{data.status}</ListItem>
                                <ListItem>{data.species}</ListItem>
                                {data.type && <ListItem>{data.type}</ListItem>}
                                <ListItem>{data.gender}</ListItem>
                                <ListItem>
                                    <Link
                                        as={NextLink}
                                        href={`${LOCATION_ROUTE}/${getIdFromUrl(character.origin.url)}`}>
                                        {data.origin.name}
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link
                                        as={NextLink}
                                        href={`${LOCATION_ROUTE}/${getIdFromUrl(character.location.url)}`}>
                                        {data.location.name}
                                    </Link>
                                </ListItem>
                            </List>
                        </SimpleGrid>
                    </Stack>
                </Flex>

                <Heading size='xl'>Episodes</Heading>
                <Flex gap={4} wrap='wrap'>
                    {data.episode.map((episode) => {
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
