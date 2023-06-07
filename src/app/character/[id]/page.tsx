import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { getCharacter } from '@/entities/Character';

import CharacterPage from './CharacterPage';

interface PageProps {
    params: { id: string };
}

export const generateMetadata = async ({ params: { id } }: PageProps): Promise<Metadata> => {
    const character = await getCharacter(id);

    return {
        title: `${character?.name ?? 'Not Found'} | Rick and Morty`,
    };
};

const Page = async ({ params: { id } }: PageProps) => {
    const character = await getCharacter(id);

    if (!character) notFound();

    return <CharacterPage character={character} />;
};

export default Page;
