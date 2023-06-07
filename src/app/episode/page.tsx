import { notFound } from 'next/navigation';

import { getEpisodes } from '@/entities/Episode';
import { PaginationParams } from '@/shared/model';

import EpisodesPage from './EpisodesPage';

interface PageProps {
    searchParams: PaginationParams;
}

const Page = async ({ searchParams }: PageProps) => {
    const data = await getEpisodes(searchParams).catch(notFound);

    return <EpisodesPage data={data} params={searchParams} />;
};

export default Page;
