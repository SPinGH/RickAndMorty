import { notFound } from 'next/navigation';

import { getLocations } from '@/entities/Location';
import { PaginationParams } from '@/shared/model';

import LocationsPage from './LocationsPage';

interface PageProps {
    searchParams: PaginationParams;
}

const Page = async ({ searchParams }: PageProps) => {
    const data = await getLocations(searchParams).catch(notFound);

    return <LocationsPage data={data} params={searchParams} />;
};

export default Page;
