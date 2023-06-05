'use client';
import { Box, Container, Flex } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { FC } from 'react';

import { Character, Filters as FiltersType, getCharacters } from '@/entities/Character';
import { CharacterCard } from '@/entities/Character/components';
import Pagination from '@/shared/components/Pagination';
import { PaginationParams, PaginationResponse } from '@/shared/model';

import Filters from './Filters';

interface CharactersProps {
    params: PaginationParams<FiltersType>;
    data: PaginationResponse<Character>;
}

const CharactersPage: FC<CharactersProps> = (props) => {
    const { data } = useQuery({
        queryKey: ['characters', props.params],
        queryFn: () => getCharacters(props.params),
        initialData: props.data,
    });

    return (
        <Box as='main' mb={8}>
            <Container maxW='container.xl'>
                <Filters params={props.params} />
                <Flex py={[4, 6, 8]} gap={6} wrap='wrap' justifyContent='center'>
                    {data.results?.map((character) => (
                        <CharacterCard key={character.id} character={character} />
                    ))}
                </Flex>
                <Pagination page={Number(props.params.page ?? '1')} info={data.info} />
            </Container>
        </Box>
    );
};

export default CharactersPage;
