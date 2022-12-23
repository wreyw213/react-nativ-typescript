import axios, { AxiosHeaders, AxiosRequestConfig } from 'axios';

type Method = 'get' | 'GET' | 'delete' | 'DELETE' | 'head' | 'HEAD' | 'options' | 'OPTIONS' |
    'post' | 'POST' | 'put' | 'PUT' | 'patch' | 'PATCH';

type AxiosResponse<T> = {
    data: T;
    status: number;
    statusText: string;
    headers: any;
    config: any;
    request?: any;
};

export const apiCall = async <T>(method: Method, url: string, data?: any, headers: any = {}, options: AxiosRequestConfig<T> = {}): Promise<AxiosResponse<T>> => {

    const requestHeaders = {
        'Content-Type': 'application/json',
        ...headers,
    };

    const requestOptions: AxiosRequestConfig<T> = {
        method,
        url,
        data,
        headers: requestHeaders,
        ...options
    };
    try {
        const response = await axios(requestOptions);
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
