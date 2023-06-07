'use client';

import { Box, Container, Flex, Heading, List, ListItem, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { FC } from 'react';

import { getCharacters } from '@/entities/Character';
import { CharacterCard, CharacterCardSkeleton } from '@/entities/Character/components';
import { getLocation, Location } from '@/entities/Location';
import { getIdsFromUrls } from '@/shared/lib';

interface LocationPageProps {
    location: Location;
}

const LocationPage: FC<LocationPageProps> = (props) => {
    const { data: location } = useQuery({
        queryKey: ['location', props.location.id],
        queryFn: () => getLocation(props.location.id.toString()),
        initialData: props.location,
    });
    const { data: residents, isLoading: residentsIsLoading } = useQuery({
        queryKey: ['locationResidents', location?.id],
        queryFn: () => getCharacters(getIdsFromUrls(location?.residents ?? [''])),
        enabled: !!location && location.residents.length !== 0,
    });

    if (!location) return null;

    return (
        <Box as='main' mb={8}>
            <Container maxW='container.xl'>
                <Stack spacing={8}>
                    <Stack spacing={8}>
                        <Heading as='h1' size={['2xl', '3xl', '4xl']}>
                            {location.name}
                        </Heading>
                        <SimpleGrid
                            as='dl'
                            fontSize='xl'
                            templateColumns={['auto', 'auto 1fr']}
                            columnGap={8}
                            rowGap={[0, 2]}>
                            <Text as='dt' fontWeight='semibold'>
                                Type
                            </Text>
                            <Text as='dd'>{location.type}</Text>

                            <Text as='dt' fontWeight='semibold'>
                                Dimension
                            </Text>
                            <Text as='dd'>{location.dimension}</Text>
                        </SimpleGrid>
                    </Stack>
                    {location.residents.length !== 0 && (
                        <>
                            <Heading size='xl'>Residents</Heading>
                            <SimpleGrid as={List} gap={6} minChildWidth='min(550px, 100%)' justifyContent='center'>
                                {residentsIsLoading &&
                                    Array(location.residents.length)
                                        .fill(0)
                                        .map((_, index) => (
                                            <ListItem key={'s' + index}>
                                                <CharacterCardSkeleton />
                                            </ListItem>
                                        ))}

                                {residents?.map((character) => (
                                    <ListItem key={character.id}>
                                        <CharacterCard key={character.id} character={character} />
                                    </ListItem>
                                ))}
                            </SimpleGrid>
                        </>
                    )}
                </Stack>
            </Container>
        </Box>
    );
};

export default LocationPage;
