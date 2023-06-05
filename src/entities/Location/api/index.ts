import { api } from '@/shared/api';
import { PaginationParams, PaginationResponse } from '@/shared/model';

import { Location } from '../model';

export const getLocations = async (params: PaginationParams<{}>) => {
    return (await api.get<PaginationResponse<Location>>('/location/', { params })).data;
};

export const getLocation = async (id: string) => {
    return (await api.get<Location>(`/location/${id}`)).data;
};
