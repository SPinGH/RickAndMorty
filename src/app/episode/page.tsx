import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { EPISODE_ROUTE } from '@/constants';
import { getEpisodes } from '@/entities/Episode';
import { PaginationParams } from '@/shared/model';

import EpisodesPage from './EpisodesPage';

interface PageProps {
    searchParams: PaginationParams;
}

export const metadata: Metadata = {
    title: 'Episodes | Rick and Morty',
    alternates: {
        canonical: `${process.env.HOST}${EPISODE_ROUTE}`,
    },
};

const Page = async ({ searchParams }: PageProps) => {
    const data = await getEpisodes(searchParams);

    if (!data) notFound();

    return <EpisodesPage data={data} params={searchParams} />;
};

export default Page;
