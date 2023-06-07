'use client';

import { Box, Container, Flex } from '@chakra-ui/react';
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

    return (
        <Box as='main' mb={8}>
            <Container maxW='container.xl'>
                <Flex pb={[4, 6, 8]} wrap='wrap' gap={4}>
                    {data.results?.map((location) => (
                        <LocationCard key={location.id} location={location} />
                    ))}
                </Flex>
                <Pagination page={Number(props.params.page ?? '1')} info={data.info} />
            </Container>
        </Box>
    );
};

export default LocationsPage;
