export const objToSearchParams = (obj: Record<string, string | number | undefined>) =>
    Object.entries(obj)
        .map(([key, value]) => (value ? `${key}=${encodeURIComponent(value)}` : ''))
        .join('&');
