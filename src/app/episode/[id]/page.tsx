import { getEpisode } from '@/entities/Episode';

import EpisodePage from './EpisodePage';

interface PageProps {
    params: { id: string };
}

const Page = async ({ params: { id } }: PageProps) => {
    const episode = await getEpisode(id);

    return <EpisodePage episode={episode} />;
};

export default Page;
