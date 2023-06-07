'use client';

import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Button, Flex, IconButton, Text } from '@chakra-ui/react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { FC, MouseEvent } from 'react';

import { objToSearchParams } from '../lib';
import { PaginationResponse } from '../model';

interface PaginationProps {
    info: PaginationResponse<{}>['info'];
    page: number;
}

const getButtons = (page: number, lastPage: number) => {
    if (lastPage <= 5)
        return Array(lastPage)
            .fill(0)
            .map((_, index) => index + 1);
    else if (page <= 3) return [1, 2, 3, 4, null, lastPage];
    else if (page >= lastPage - 2) return [1, null, lastPage - 3, lastPage - 2, lastPage - 1, lastPage];
    else return [1, null, page - 1, page, page + 1, null, lastPage];
};

const Pagination: FC<PaginationProps> = ({ page, info }) => {
    const router = useRouter();
    const params = useSearchParams();
    const pathname = usePathname();

    if (info.pages === 1) return null;

    const setPage = (page: string) => {
        router.push(
            `${pathname}?${objToSearchParams({
                ...Object.fromEntries(params.entries()),
                page: page,
            })}`
        );
    };

    const onNextClick = () => setPage((page + 1).toString());
    const onPrevClick = () => setPage((page - 1).toString());
    const onPageClick = (event: MouseEvent<HTMLButtonElement>) => setPage(event.currentTarget.value);

    const buttons = getButtons(page, info.pages);

    return (
        <Flex justifyContent='center' alignItems='center' gap={2}>
            <IconButton
                size={['sm', 'md']}
                icon={<ChevronLeftIcon />}
                onClick={onPrevClick}
                isDisabled={page === 1}
                variant='outline'
                aria-label='Previous page'>
                {'<'}
            </IconButton>
            {buttons.map((value, index) =>
                value ? (
                    <Button
                        key={index}
                        size={['sm', 'md']}
                        onClick={onPageClick}
                        value={value}
                        variant={value === page ? 'solid' : 'outline'}>
                        {value}
                    </Button>
                ) : (
                    <Text key={index}>...</Text>
                )
            )}
            <IconButton
                size={['sm', 'md']}
                icon={<ChevronRightIcon />}
                onClick={onNextClick}
                isDisabled={page === info.pages}
                variant='outline'
                aria-label='Next page'
            />
        </Flex>
    );
};

export default Pagination;
