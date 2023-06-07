'use client';

import { FormControl, FormLabel, HStack, Select, Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FC } from 'react';

import { CHARACTER_ROUTE } from '@/constants';
import { Filters as FiltersType } from '@/entities/Character';
import { objToSearchParams } from '@/shared/lib';
import { PaginationParams } from '@/shared/model';

interface FiltersProps {
    params: PaginationParams<FiltersType>;
}

const Filters: FC<FiltersProps> = ({ params }) => {
    const router = useRouter();

    const setFilters = (filter: Record<string, string>) =>
        router.push(`${CHARACTER_ROUTE}?${objToSearchParams({ ...params, page: 1, ...filter })}`);

    const onStatusChange = (event: ChangeEvent<HTMLSelectElement>) => setFilters({ status: event.currentTarget.value });
    const onGenderChange = (event: ChangeEvent<HTMLSelectElement>) => setFilters({ gender: event.currentTarget.value });

    return (
        <HStack as='form' spacing={4} width='fit-content'>
            <FormControl display='flex' alignItems='center'>
                <FormLabel my={0}>Status:</FormLabel>
                <Select placeholder='Select status' onChange={onStatusChange} value={params.status}>
                    <option value='alive'>Alive</option>
                    <option value='dead'>Dead</option>
                    <option value='unknown'>unknown</option>
                </Select>
            </FormControl>
            <FormControl display='flex' alignItems='center'>
                <FormLabel my={0}>Gender:</FormLabel>
                <Select placeholder='Select gender' onChange={onGenderChange} value={params.gender}>
                    <option value='Female'>Female</option>
                    <option value='Male'>Male</option>
                    <option value='Genderless'>Genderless</option>
                    <option value='unknown'>unknown</option>
                </Select>
            </FormControl>
        </HStack>
    );
};

export default Filters;
