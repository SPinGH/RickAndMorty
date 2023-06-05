import { api } from '@/shared/api';
import { PaginationParams, PaginationResponse } from '@/shared/model';

import { Episode } from '../model';

export const getEpisodes = async (params: PaginationParams<{}>) => {
    return (await api.get<PaginationResponse<Episode>>('/episode/', { params })).data;
};

export const getEpisode = async (id: string) => {
    return (await api.get<Episode>(`/episode/${id}`)).data;
};
