import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { getLocation } from '@/entities/Location';

import LocationPage from './LocationPage';

interface PageProps {
    params: { id: string };
}

export const generateMetadata = async ({ params: { id } }: PageProps): Promise<Metadata> => {
    const location = await getLocation(id);

    return {
        title: `${location?.name ?? 'Not Found'} | Rick and Morty`,
    };
};

const Page = async ({ params: { id } }: PageProps) => {
    const location = await getLocation(id);

    if (!location) notFound();

    return <LocationPage location={location} />;
};

export default Page;
