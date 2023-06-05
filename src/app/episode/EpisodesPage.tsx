'use client';
import { Box, Card, CardBody, Container, Flex, Heading, LinkBox, LinkOverlay, Text } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import NextLink from 'next/link';
import { FC } from 'react';

import { EPISODE_ROUTE, LOCATION_ROUTE } from '@/constants';
import { Episode, getEpisodes } from '@/entities/Episode';
import { getLocations, Location } from '@/entities/Location';
import Pagination from '@/shared/components/Pagination';
import { PaginationParams, PaginationResponse } from '@/shared/model';

interface EpisodesPageProps {
    params: PaginationParams<{}>;
    data: PaginationResponse<Episode>;
}

const EpisodesPage: FC<EpisodesPageProps> = (props) => {
    const { data } = useQuery({
        queryKey: ['episodes', props.params],
        queryFn: () => getEpisodes(props.params),
        initialData: props.data,
    });

    return (
        <Box as='main' mb={8}>
            <Container maxW='container.xl'>
                <Flex pb={[4, 6, 8]} wrap='wrap' gap={4}>
                    {data.results?.map((episode) => (
                        <LinkBox as={Card} key={episode.id} _hover={{ shadow: 'md' }}>
                            <CardBody>
                                <Heading as='p' size='md'>
                                    <LinkOverlay as={NextLink} href={`${EPISODE_ROUTE}/${episode.id}`}>
                                        {episode.episode} ({episode.name})
                                    </LinkOverlay>
                                </Heading>
                                <Text>{episode.air_date}</Text>
                            </CardBody>
                        </LinkBox>
                    ))}
                </Flex>
                <Pagination page={Number(props.params.page ?? '1')} info={data.info} />
            </Container>
        </Box>
    );
};

export default EpisodesPage;
