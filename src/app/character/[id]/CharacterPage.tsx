'use client';

import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Image,
    Link,
    List,
    ListItem,
    SimpleGrid,
    Stack,
    Text,
} from '@chakra-ui/react';
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

    if (!character) return null;

    return (
        <Box as='main' mb={8}>
            <Container maxW='container.xl'>
                <Stack spacing={8}>
                    <Flex gap={8} direction={['column', null, 'row']}>
                        <Image
                            objectFit='contain'
                            alignSelf='flex-start'
                            height='300px'
                            aspectRatio={1}
                            src={character.image}
                            alt={character.name}
                        />
                        <Stack spacing={8} flex='1 1 auto'>
                            <Heading as='h1' size={['2xl', '3xl', '4xl']}>
                                {character.name}
                            </Heading>
                            <SimpleGrid
                                as='dl'
                                fontSize='xl'
                                templateColumns={['auto', 'auto 1fr']}
                                columnGap={8}
                                rowGap={[0, 2]}>
                                <Text as='dt' fontWeight='semibold'>
                                    Status
                                </Text>
                                <Text as='dd'>{character.status}</Text>

                                <Text as='dt' fontWeight='semibold'>
                                    Species
                                </Text>
                                <Text as='dd'>{character.species}</Text>

                                {character.type && (
                                    <>
                                        <Text as='dt' fontWeight='semibold'>
                                            Type
                                        </Text>
                                        <Text as='dd'>{character.type}</Text>
                                    </>
                                )}

                                <Text as='dt' fontWeight='semibold'>
                                    Gender
                                </Text>
                                <Text as='dd'>{character.gender}</Text>

                                <Text as='dt' fontWeight='semibold'>
                                    Origin location
                                </Text>
                                <Text as='dd'>
                                    <Link
                                        as={NextLink}
                                        href={`${LOCATION_ROUTE}/${getIdFromUrl(character.origin.url)}`}>
                                        {character.origin.name}
                                    </Link>
                                </Text>

                                <Text as='dt' fontWeight='semibold'>
                                    Last known location
                                </Text>
                                <Text as='dd'>
                                    <Link
                                        as={NextLink}
                                        href={`${LOCATION_ROUTE}/${getIdFromUrl(character.location.url)}`}>
                                        {character.location.name}
                                    </Link>
                                </Text>
                            </SimpleGrid>
                        </Stack>
                    </Flex>
                    <Heading size='xl'>Episodes</Heading>
                    <Flex as={List} gap={4} wrap='wrap'>
                        {character.episode.map((episode) => {
                            const id = getIdFromUrl(episode);
                            return (
                                <ListItem key={id}>
                                    <Button as={NextLink} href={`${EPISODE_ROUTE}/${id}`}>
                                        {id}
                                    </Button>
                                </ListItem>
                            );
                        })}
                    </Flex>
                </Stack>
            </Container>
        </Box>
    );
};

export default CharacterPage;
