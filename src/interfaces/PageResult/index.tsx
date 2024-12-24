interface PageResult<T> {
    page: number;
    pageSize: number;
    total: number;
    totalPage: number;
    data: T[];
}

export type { PageResult } 