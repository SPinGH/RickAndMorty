import { notFound } from 'next/navigation';

import { Filters, getCharacters } from '@/entities/Character';
import { PaginationParams } from '@/shared/model';

import CharactersPage from './CharactersPage';

interface PageProps {
    searchParams: PaginationParams<Filters>;
}

const Page = async ({ searchParams }: PageProps) => {
    const data = await getCharacters(searchParams).catch(notFound);

    return <CharactersPage data={data} params={searchParams} />;
};

export default Page;
