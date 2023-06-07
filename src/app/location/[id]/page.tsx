import { notFound } from 'next/navigation';

import { getLocation } from '@/entities/Location';

import LocationPage from './LocationPage';

interface PageProps {
    params: { id: string };
}

const Page = async ({ params: { id } }: PageProps) => {
    const location = await getLocation(id).catch(notFound);

    return <LocationPage location={location} />;
};

export default Page;
