import { getEpisodes } from '@/entities/Episode';
import { PaginationParams } from '@/shared/model';

import EpisodesPage from './EpisodesPage';

interface PageProps {
    searchParams: PaginationParams;
}

const Page = async ({ searchParams }: PageProps) => {
    const data = await getEpisodes(searchParams);

    return <EpisodesPage data={data} params={searchParams} />;
};

export default Page;
