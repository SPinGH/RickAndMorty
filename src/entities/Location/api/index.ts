import { api } from '@/shared/api';
import { PaginationParams, PaginationResponse } from '@/shared/model';

import { Location } from '../model';

export const getLocations = async (params: PaginationParams<{}>) => {
    return await api<PaginationResponse<Location>>('/location/', { params });
};

export const getLocation = async (id: string) => {
    return await api<Location>(`/location/${id}`);
};
