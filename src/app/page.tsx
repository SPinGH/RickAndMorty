import { getCharacters } from '@/entities/Character';

import HomePage from './HomePage';

const Page = async () => {
    const characters = await getCharacters('1,2,3,4,5,6');

    return <HomePage characters={characters} />;
};

export default Page;
