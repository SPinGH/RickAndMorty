'use client';

import { Card, CardBody, Skeleton, Stack, useColorModeValue } from '@chakra-ui/react';

const CharacterCardSkeleton = () => (
    <Card
        direction={['column', 'row']}
        overflow='hidden'
        width={['100%', null, '550px']}
        height={['auto', '220px']}
        bg={useColorModeValue('gray.100', 'gray.600')}>
        <Skeleton height='220px' aspectRatio={1} />
        <CardBody p={5}>
            <Stack>
                <Stack spacing={1}>
                    <Skeleton height='9' />
                    <Skeleton height='5' width='60%' />
                </Stack>

                <Stack spacing={1}>
                    <Skeleton height='6' width='50%' />
                    <Skeleton height='5' width='40%' />
                </Stack>

                <Stack spacing={1}>
                    <Skeleton height='6' width='70%' />
                    <Skeleton height='5' width='50%' />
                </Stack>
            </Stack>
        </CardBody>
    </Card>
);
export default CharacterCardSkeleton;
