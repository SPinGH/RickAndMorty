import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { LOCATION_ROUTE } from '@/constants';
import { getLocations } from '@/entities/Location';
import { PaginationParams } from '@/shared/model';

import LocationsPage from './LocationsPage';

interface PageProps {
    searchParams: PaginationParams;
}

export const metadata: Metadata = {
    title: 'Locations | Rick and Morty',
    alternates: {
        canonical: `${process.env.HOST}${LOCATION_ROUTE}`,
    },
};

const Page = async ({ searchParams }: PageProps) => {
    const data = await getLocations(searchParams);

    if (!data) notFound();

    return <LocationsPage data={data} params={searchParams} />;
};

export default Page;
