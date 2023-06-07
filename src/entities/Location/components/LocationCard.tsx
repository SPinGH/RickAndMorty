'use client';

import { Card, CardBody, Heading, LinkBox, LinkOverlay, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { FC } from 'react';

import { LOCATION_ROUTE } from '@/constants';

import { Location } from '../model';

interface LocationCardProps {
    location: Location;
}

const LocationCard: FC<LocationCardProps> = ({ location }) => {
    return (
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
    );
};
export default LocationCard;
