'use client';
import { Container, Flex, Heading, List, ListItem, SimpleGrid, Spinner, Stack } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { FC } from 'react';

import { getCharacters } from '@/entities/Character';
import { CharacterCard } from '@/entities/Character/components';
import { getLocation, getResidentIds, Location } from '@/entities/Location';

interface LocationPageProps {
    location: Location;
}

const LocationPage: FC<LocationPageProps> = ({ location }) => {
    const { data } = useQuery({
        queryKey: ['location', location.id],
        queryFn: () => getLocation(location.id.toString()),
        initialData: location,
    });
    const { data: residents, isLoading: residentsIsLoading } = useQuery({
        queryKey: ['residents', location.id],
        queryFn: () => getCharacters(getResidentIds(location.residents)),
        enabled: data && data.residents.length !== 0,
    });

    return (
        <Container maxW='container.xl'>
            <Stack spacing={8}>
                <Stack spacing={8}>
                    <Heading as='h1' size='4xl'>
                        {data.name}
                    </Heading>
                    <SimpleGrid fontSize='xl' templateColumns='auto 1fr' spacing={8}>
                        <List fontWeight='semibold' spacing={2}>
                            <ListItem>Type</ListItem>
                            <ListItem>Dimension</ListItem>
                        </List>
                        <List spacing={2}>
                            <ListItem>{data.type}</ListItem>
                            <ListItem>{data.dimension}</ListItem>
                        </List>
                    </SimpleGrid>
                </Stack>
                {data.residents.length !== 0 && (
                    <>
                        <Heading size='xl'>Residents</Heading>
                        {residentsIsLoading && <Spinner />}
                        <Flex py={[4, 6, 8]} gap={6} wrap='wrap' justifyContent='center'>
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
