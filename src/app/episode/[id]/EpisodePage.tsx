'use client';
import { Container, Flex, Heading, List, ListItem, SimpleGrid, Spinner, Stack } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { FC } from 'react';

import { getCharacters } from '@/entities/Character';
import { CharacterCard } from '@/entities/Character/components';
import { Episode, getEpisode } from '@/entities/Episode';
import { getIdsFromUrls } from '@/shared/lib';

interface EpisodePageProps {
    episode: Episode;
}

const EpisodePage: FC<EpisodePageProps> = ({ episode }) => {
    const { data } = useQuery({
        queryKey: ['episode', episode.id],
        queryFn: () => getEpisode(episode.id.toString()),
        initialData: episode,
    });
    const { data: characters, isLoading: charactersIsLoading } = useQuery({
        queryKey: ['episodeCharacters', episode.id],
        queryFn: () => getCharacters(getIdsFromUrls(episode.characters)),
        enabled: data && data.characters.length !== 0,
    });

    return (
        <Container maxW='container.xl'>
            <Stack spacing={8}>
                <Stack spacing={8}>
                    <Heading as='h1' size='4xl'>
                        {data.name}
                    </Heading>
                    <SimpleGrid fontSize='xl' templateColumns='auto 1fr' spacing={8}>
                        <List fontWeight='semibold' spacing={2}>
                            <ListItem>Code</ListItem>
                            <ListItem>Air date</ListItem>
                        </List>
                        <List spacing={2}>
                            <ListItem>{data.episode}</ListItem>
                            <ListItem>{data.air_date}</ListItem>
                        </List>
                    </SimpleGrid>
                </Stack>
                {data.characters.length !== 0 && (
                    <>
                        <Heading size='xl'>Characters</Heading>
                        {charactersIsLoading && <Spinner />}
                        <Flex pb={[4, 6, 8]} gap={6} wrap='wrap' justifyContent='center'>
                            {characters?.map((character) => (
                                <CharacterCard key={character.id} character={character} />
                            ))}
                        </Flex>
                    </>
                )}
            </Stack>
        </Container>
    );
};

export default EpisodePage;
