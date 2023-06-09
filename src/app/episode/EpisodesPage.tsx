'use client';

import { Box, Container, Flex, List, ListItem, SimpleGrid, Stack } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { FC } from 'react';

import { Episode, getEpisodes } from '@/entities/Episode';
import { EpisodeCard } from '@/entities/Episode/components';
import Pagination from '@/shared/components/Pagination';
import { PaginationParams, PaginationResponse } from '@/shared/model';

interface EpisodesPageProps {
    params: PaginationParams;
    data: PaginationResponse<Episode>;
}

const EpisodesPage: FC<EpisodesPageProps> = (props) => {
    const { data } = useQuery({
        queryKey: ['episodes', props.params],
        queryFn: () => getEpisodes(props.params),
        initialData: props.data,
    });

    if (!data) return null;

    return (
        <Box as='main' mb={8}>
            <Container maxW='container.xl'>
                <SimpleGrid as={List} pb={[4, 6, 8]} gap='4' minChildWidth='min(550px, 100%)'>
                    {data.results?.map((episode) => (
                        <ListItem key={episode.id}>
                            <EpisodeCard episode={episode} />
                        </ListItem>
                    ))}
                </SimpleGrid>
                <Pagination page={Number(props.params.page ?? '1')} info={data.info} />
            </Container>
        </Box>
    );
};

export default EpisodesPage;
