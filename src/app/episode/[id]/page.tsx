import { notFound } from 'next/navigation';

import { getEpisode } from '@/entities/Episode';

import EpisodePage from './EpisodePage';

interface PageProps {
    params: { id: string };
}

const Page = async ({ params: { id } }: PageProps) => {
    const episode = await getEpisode(id).catch(notFound);

    return <EpisodePage episode={episode} />;
};

export default Page;
