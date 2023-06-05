'use client';
import { Link } from '@chakra-ui/next-js';
import { Box, Button, Card, CardBody, Container, Flex, Heading, LinkBox, LinkOverlay, Text } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import NextLink from 'next/link';
import { FC } from 'react';

import { LOCATION_ROUTE } from '@/constants';
import { getLocations, Location } from '@/entities/Location';
import Pagination from '@/shared/components/Pagination';
import { PaginationParams, PaginationResponse } from '@/shared/model';

interface LocationsPageProps {
    params: PaginationParams<{}>;
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
                        <LinkBox as={Card} key={location.id} _hover={{ shadow: 'md' }}>
                            <CardBody>
                                <Heading as='p' size='md'>
                                    <LinkOverlay as={NextLink} href={`${LOCATION_ROUTE}/${location.id}`}>
                                        {location.name}
                                    </LinkOverlay>
                                </Heading>
                                <Text>
                                    {location.type} - {location.dimension}
                                </Text>
                            </CardBody>
                        </LinkBox>
                    ))}
                </Flex>
                <Pagination page={Number(props.params.page ?? '1')} info={data.info} />
            </Container>
        </Box>
    );
};

export default LocationsPage;
