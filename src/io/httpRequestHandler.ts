/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig } from 'axios';

const instance = axios.create({ timeout: 35000 }); // 35 seconds timeout

const sendResponse = (response: any) => response;

const verifyExpiredToken = async (error: any) => {
  if (error?.response?.status === 401) {
    const renewedToken = 'Novo Token';

    const updatedConfig = {
      ...error.config,
      headers: {
        ...error.config.headers,
        token: renewedToken,
      },
    };

    const { data } = await httpRequestHandler(updatedConfig);

    return { data: { data, token: renewedToken } };
  } else return Promise.reject(error);
};

const addAuthHeaders = async (config: any) => {
  const token = config.headers.token;

  const headers = {
    ...config,
    headers: {
      ...config.headers,
      authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  };

  return headers;
};

export interface HttpResponse<T> {
  data: T;
}

const httpRequestHandler = async <T>(
  httpRequest: AxiosRequestConfig,
): Promise<HttpResponse<T>> => {
  try {
    const { data } = await instance(httpRequest);
    return { data };
  } catch (error: any) {
    throw error.response || error;
  }
};

instance.interceptors.request.use(addAuthHeaders);

instance.interceptors.response.use(sendResponse, verifyExpiredToken);

export default httpRequestHandler;
