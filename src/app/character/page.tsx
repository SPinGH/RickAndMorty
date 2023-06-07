import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { CHARACTER_ROUTE } from '@/constants';
import { Filters, getCharacters } from '@/entities/Character';
import { PaginationParams } from '@/shared/model';

import CharactersPage from './CharactersPage';

interface PageProps {
    searchParams: PaginationParams<Filters>;
}

export const metadata: Metadata = {
    title: 'Characters | Rick and Morty',
    alternates: {
        canonical: `${process.env.HOST}${CHARACTER_ROUTE}`,
    },
};

const Page = async ({ searchParams }: PageProps) => {
    const data = await getCharacters(searchParams);

    if (!data) notFound();

    return <CharactersPage data={data} params={searchParams} />;
};

export default Page;
