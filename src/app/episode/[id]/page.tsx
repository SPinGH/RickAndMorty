import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { getEpisode } from '@/entities/Episode';

import EpisodePage from './EpisodePage';

interface PageProps {
    params: { id: string };
}

export const generateMetadata = async ({ params: { id } }: PageProps): Promise<Metadata> => {
    const episode = await getEpisode(id);

    return {
        title: `${episode?.name ?? 'Not Found'} | Rick and Morty`,
    };
};

const Page = async ({ params: { id } }: PageProps) => {
    const episode = await getEpisode(id);

    if (!episode) notFound();

    return <EpisodePage episode={episode} />;
};

export default Page;
