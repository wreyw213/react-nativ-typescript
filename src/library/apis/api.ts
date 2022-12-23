import axios, { AxiosError, AxiosHeaders, AxiosRequestConfig } from 'axios';

export type Method = 'get' | 'GET' | 'delete' | 'DELETE' | 'head' | 'HEAD' | 'options' | 'OPTIONS' |
    'post' | 'POST' | 'put' | 'PUT' | 'patch' | 'PATCH';

type ApiResposneData<T> = {
    success: boolean,
    message: string,
    data: T
}

type AxiosResponse<T> = {
    data: ApiResposneData<T>;
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
    } catch (error: any) {
        throw apiError(error);
    }
};


export const apiError = (err: AxiosError & any): string => {
    if (err.response && err.response.data) {
        return err.response.data?.message
    } else if (err.response) {
        return err.response
    } else if (err.message) {
        return err.message
    } else {
        return "Something went wrong.please try again"
    }
}
