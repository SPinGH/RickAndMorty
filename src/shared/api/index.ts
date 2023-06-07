import { objToSearchParams } from '../lib';

export const api = async <T, O extends {} = {}>(path: string, params?: O): Promise<T | null> => {
    const response = await fetch(
        `https://rickandmortyapi.com/api${path}${params ? '?' + objToSearchParams(params) : ''}`
    );
    if (!response.ok) return null;
    return response.json();
};
