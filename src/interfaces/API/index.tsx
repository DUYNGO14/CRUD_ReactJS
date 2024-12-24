interface ApiOptions {
        method?: string;
        headers?: Record<string, string>;
        body?: string;
    }
    
interface BaseResponse {
    status: number;
    message: string;
}

interface ApiResponse<T> extends BaseResponse {
    data: T;
    error?: string;
    
}

export type { ApiOptions, BaseResponse, ApiResponse };