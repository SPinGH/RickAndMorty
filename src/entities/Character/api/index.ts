import { api } from '@/shared/api';
import { PaginationParams, PaginationResponse } from '@/shared/model';

import { Character } from '../model';
import { Filters } from '../model/Filters';

type GetCharacters = {
    (params: PaginationParams<Filters>): Promise<PaginationResponse<Character>>;
    (ids: string): Promise<Character[]>;
};

export const getCharacters = (async (params: PaginationParams<Filters> | string) => {
    if (typeof params === 'string') {
        return (await api.get<Character[]>(`/character/${params}`)).data;
    }

    return (await api.get<PaginationResponse<Character>>('/character/', { params })).data;
}) as GetCharacters;

export const getCharacter = async (id: Character['id']) => {
    return (await api.get<Character>(`/character/${id}`)).data;
};
