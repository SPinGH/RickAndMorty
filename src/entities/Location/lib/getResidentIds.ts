import { getIdFromUrl } from '@/shared/lib';

import { Location } from '../model';

export const getResidentIds = (residents: Location['residents']) =>
    residents.map((resident) => getIdFromUrl(resident)).join(',');
