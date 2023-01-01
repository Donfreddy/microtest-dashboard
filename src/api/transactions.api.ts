import axios, {AxiosError} from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_CAMPAY_BASE_URL || 'https://demo.campay.net/api',
  headers: {
    "Content-Type": "application/json",
  }
});

// Add a request interceptor to add the token to the header
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token != null) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      config.headers.Authorization = `Token ${token}`;
    }
    return config;
  }
);

// Add a response interceptor to check for refresh token
axiosInstance.interceptors.response.use(async (response) => {
  return response
}, async (error: AxiosError) => {
  if (error.response?.status === 401) {
    localStorage.removeItem('token');
    await getAccessToken();
  }
});

// Withdraw fund
export async function withdrawMoney(payload: WithdrawReq): Promise<(null | WithdrawRes)[]> {
  try {
    const {data} = await axiosInstance.post<WithdrawRes>(`/withdraw/`, JSON.stringify(payload));
    return [null, data];
  } catch (error) {
    return [error];
  }
}

// Transaction Status
export async function getTransactionStatus(reference: string): Promise<(null | StatusRes)[]> {
  try {
    const {data} = await axiosInstance.get<StatusRes>(`/transaction/${reference}/`);
    return [null, data];
  } catch (error) {
    return [error];
  }
}

// Get token
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function getAccessToken() {
  try {
    const {data, status} = await axiosInstance.post<TokenRes>(`/token/`, JSON.stringify({
      username: process.env.VUE_APP_CAMPAY_USERNAME || 'c_GoCtK20pkDknF89Z1eF8R2FGQseB6BLz9WDn95ySwuPzrId9ZsS-sqMiU44jOQi2d2eXrLOD5VJ4hXatr2Sg',
      password: process.env.VUE_APP_CAMPAY_PASSWORD || 'UwD1Fdn_n2qMtOxnhH3GrW2opH87MUYDAYdcGRjn81FYmSL4Ziz78UtWttu_pvURBKUwBiIFJf_FhMVnSwL7CA'
    }));

    console.log('This is the data', data);
    console.log('This is the status', status);
    localStorage.setItem('token', data.token);
  } catch (error) {
    const err = error as AxiosError;
    console.log(err.response?.data)
  }
}

// https://dev.to/blindkai/managing-api-layers-in-vue-js-with-typescript-hno