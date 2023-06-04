import { getCharacter } from '@/entities/Character';

import CharacterPage from './CharacterPage';

interface PageProps {
    params: { id: string };
}

const Page = async ({ params: { id } }: PageProps) => {
    const character = await getCharacter(id);

    return <CharacterPage character={character} />;
};

export default Page;
