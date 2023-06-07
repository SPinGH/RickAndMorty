import { api } from '@/shared/api';
import { PaginationParams, PaginationResponse } from '@/shared/model';

import { Character } from '../model';
import { Filters } from '../model/Filters';

type GetCharacters = {
    (params: PaginationParams<Filters>): Promise<PaginationResponse<Character> | null>;
    (ids: string): Promise<Character[] | null>;
};

export const getCharacters = (async (params: PaginationParams<Filters> | string) => {
    if (typeof params === 'string') {
        return await api<Character[]>(`/character/${params}`);
    }

    return await api<PaginationResponse<Character>>('/character/', params);
}) as GetCharacters;

export const getCharacter = async (id: string) => {
    return await api<Character>(`/character/${id}`);
};
