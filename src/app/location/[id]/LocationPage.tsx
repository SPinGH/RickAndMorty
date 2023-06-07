'use client';

import { Container, Flex, Heading, List, ListItem, SimpleGrid, Stack } from '@chakra-ui/react';
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
        queryKey: ['locationResidents', location.id],
        queryFn: () => getCharacters(getIdsFromUrls(location.residents)),
        enabled: location && location.residents.length !== 0,
    });

    return (
        <Container maxW='container.xl'>
            <Stack spacing={8}>
                <Stack spacing={8}>
                    <Heading as='h1' size='4xl'>
                        {location.name}
                    </Heading>
                    <SimpleGrid fontSize='xl' templateColumns='auto 1fr' spacing={8}>
                        <List fontWeight='semibold' spacing={2}>
                            <ListItem>Type</ListItem>
                            <ListItem>Dimension</ListItem>
                        </List>
                        <List spacing={2}>
                            <ListItem>{location.type}</ListItem>
                            <ListItem>{location.dimension}</ListItem>
                        </List>
                    </SimpleGrid>
                </Stack>
                {location.residents.length !== 0 && (
                    <>
                        <Heading size='xl'>Residents</Heading>
                        <Flex pb={[4, 6, 8]} gap={6} wrap='wrap' justifyContent='center'>
                            {residentsIsLoading &&
                                Array(location.residents.length)
                                    .fill(0)
                                    .map((_, index) => <CharacterCardSkeleton key={'s' + index} />)}

                            {residents?.map((character) => (
                                <CharacterCard key={character.id} character={character} />
                            ))}
                        </Flex>
                    </>
                )}
            </Stack>
        </Container>
    );
};

export default LocationPage;
