import {
  AxiosError,
  type AxiosInstance,
  type AxiosResponse,
  type InternalAxiosRequestConfig
} from 'axios';

// Define the error response interface (similar to ErrorResponse)
interface ErrorResponse {
  status: number;
  code?: string;
  message: string;
  debugMessage?: any;
}

// Setup Request and Response Interceptors
export const addHttpInterceptor = (http: AxiosInstance): void => {
  http.interceptors.request.use(onRequest, onRequestError);
  http.interceptors.response.use(onResponse, onResponseError);
};

// Request Interceptor
const onRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  const token = localStorage.getItem('ACCESS_TOKEN');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
};

// Request Error Interceptor
const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

// Response Interceptor
const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response;
};

// Response Error Interceptor
const onResponseError = (error: AxiosError<ErrorResponse>): Promise<ErrorResponse> => {
  const { response } = error;
  const status = response?.status || 0;
  const data = response?.data || { status, code: 'SERVER_ERROR', message: 'Server error' };
  const statusText = response?.statusText || 'An error occurred';

  const errorResponse: ErrorResponse = getErrorResponse(status, data, statusText);

  return Promise.reject(errorResponse);
};

// Function to handle error response creation based on status
const getErrorResponse = (status: number, data: any, statusText: string): ErrorResponse => {
  switch (status) {
    case 0:
      return { status, code: 'SERVER_ERROR', message: statusText || 'Server error' };
    case 401:
      return data;
    case 500:
      return {
        status,
        code: 'SERVER_ERROR',
        message: 'Internal server error!',
        debugMessage: data || 'Server error occurred'
      };
    case 503:
      return data;
    default:
      return data;
  }
};

// Function to handle 401 Unauthorized
const handleUnauthorized = (): void => {
  localStorage.removeItem('ACCESS_TOKEN');
  const { protocol, hostname, port } = window.location;
  window.location.href = `${protocol}//${hostname}:${port}/auth/login`;
};
