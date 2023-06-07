'use client';

import { Container, Flex, Heading, List, ListItem, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { FC } from 'react';

import { getCharacters } from '@/entities/Character';
import { CharacterCard, CharacterCardSkeleton } from '@/entities/Character/components';
import { Episode, getEpisode } from '@/entities/Episode';
import { getIdsFromUrls } from '@/shared/lib';

interface EpisodePageProps {
    episode: Episode;
}

const EpisodePage: FC<EpisodePageProps> = (props) => {
    const { data: episode } = useQuery({
        queryKey: ['episode', props.episode.id],
        queryFn: () => getEpisode(props.episode.id.toString()),
        initialData: props.episode,
    });

    const { data: characters, isLoading: charactersIsLoading } = useQuery({
        queryKey: ['episodeCharacters', episode?.id],
        queryFn: () => getCharacters(getIdsFromUrls(episode?.characters ?? [''])),
        enabled: !!episode && episode.characters.length !== 0,
    });

    if (!episode) return null;

    return (
        <Container maxW='container.xl'>
            <Stack spacing={8}>
                <Stack spacing={8}>
                    <Heading as='h1' size={['2xl', '3xl', '4xl']}>
                        {episode.name}
                    </Heading>
                    <SimpleGrid
                        as='dl'
                        fontSize='xl'
                        templateColumns={['auto', 'auto 1fr']}
                        columnGap={8}
                        rowGap={[0, 2]}>
                        <Text as='dt' fontWeight='semibold'>
                            Code
                        </Text>
                        <Text as='dd'>{episode.episode}</Text>

                        <Text as='dt' fontWeight='semibold'>
                            Air date
                        </Text>
                        <Text as='dd'>{episode.air_date}</Text>
                    </SimpleGrid>
                </Stack>
                {episode.characters.length !== 0 && (
                    <>
                        <Heading size='xl'>Characters</Heading>
                        <SimpleGrid as={List} gap={6} minChildWidth='min(550px, 100%)' justifyContent='center'>
                            {charactersIsLoading &&
                                Array(episode.characters.length)
                                    .fill(0)
                                    .map((_, index) => (
                                        <ListItem key={'s' + index}>
                                            <CharacterCardSkeleton />
                                        </ListItem>
                                    ))}

                            {characters?.map((character) => (
                                <ListItem key={character.id}>
                                    <CharacterCard character={character} />
                                </ListItem>
                            ))}
                        </SimpleGrid>
                    </>
                )}
            </Stack>
        </Container>
    );
};

export default EpisodePage;
