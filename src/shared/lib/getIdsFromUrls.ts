import { getIdFromUrl } from './getIdFromUrl';

export const getIdsFromUrls = (urls: string[]) => urls.map((url) => getIdFromUrl(url)).join(',');
