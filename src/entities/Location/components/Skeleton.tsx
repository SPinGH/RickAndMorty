'use client';

import { Card, CardBody, Skeleton, Stack } from '@chakra-ui/react';

const LocationCardSkeleton = () => {
    return (
        <Card>
            <CardBody>
                <Stack>
                    <Skeleton height='6' width='70%' />
                    <Skeleton height='5' width='50%' />
                </Stack>
            </CardBody>
        </Card>
    );
};

export default LocationCardSkeleton;
