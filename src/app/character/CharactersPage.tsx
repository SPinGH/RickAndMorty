'use client';

import { Box, Container, List, ListItem, SimpleGrid } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { FC } from 'react';

import { Character, Filters as FiltersType, getCharacters } from '@/entities/Character';
import { CharacterCard } from '@/entities/Character/components';
import Pagination from '@/shared/components/Pagination';
import { PaginationParams, PaginationResponse } from '@/shared/model';

import Filters from './Filters';

interface CharactersPageProps {
    params: PaginationParams<FiltersType>;
    data: PaginationResponse<Character>;
}

const CharactersPage: FC<CharactersPageProps> = (props) => {
    const { data } = useQuery({
        queryKey: ['characters', props.params],
        queryFn: () => getCharacters(props.params),
        initialData: props.data,
    });

    if (!data) return null;

    return (
        <Box as='main' mb={8}>
            <Container maxW='container.xl'>
                <Filters params={props.params} />
                <SimpleGrid as={List} py={[4, 6, 8]} gap='4' minChildWidth='min(550px, 100%)'>
                    {data.results?.map((character) => (
                        <ListItem key={character.id}>
                            <CharacterCard character={character} />
                        </ListItem>
                    ))}
                </SimpleGrid>
                <Pagination page={Number(props.params.page ?? '1')} info={data.info} />
            </Container>
        </Box>
    );
};

export default CharactersPage;
