'use client';

import { Box, Container, List, ListItem, SimpleGrid, Stack } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { FC } from 'react';

import { getLocations, Location } from '@/entities/Location';
import { LocationCard } from '@/entities/Location/components';
import Pagination from '@/shared/components/Pagination';
import { PaginationParams, PaginationResponse } from '@/shared/model';

interface LocationsPageProps {
    params: PaginationParams;
    data: PaginationResponse<Location>;
}

const LocationsPage: FC<LocationsPageProps> = (props) => {
    const { data } = useQuery({
        queryKey: ['locations', props.params],
        queryFn: () => getLocations(props.params),
        initialData: props.data,
    });

    if (!data) return null;

    return (
        <Box as='main' mb={8}>
            <Container maxW='container.xl'>
                <SimpleGrid as={List} pb={[4, 6, 8]} gap='4' minChildWidth='min(550px, 100%)'>
                    {data.results?.map((location) => (
                        <ListItem key={location.id}>
                            <LocationCard location={location} />
                        </ListItem>
                    ))}
                </SimpleGrid>
                <Pagination page={Number(props.params.page ?? '1')} info={data.info} />
            </Container>
        </Box>
    );
};

export default LocationsPage;
