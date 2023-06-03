export interface PaginationResponse<T> {
    results: T[] | null;
    info: {
        count: number;
        pages: number;
    };
}

export type PaginationParams<T extends {}> = T & {
    page?: number;
};
