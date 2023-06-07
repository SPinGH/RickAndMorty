import { api } from '@/shared/api';
import { PaginationParams, PaginationResponse } from '@/shared/model';

import { Episode } from '../model';

export const getEpisodes = async (params: PaginationParams<{}>) => {
    return await api<PaginationResponse<Episode>>('/episode/', { params });
};

export const getEpisode = async (id: string) => {
    return await api<Episode>(`/episode/${id}`);
};
