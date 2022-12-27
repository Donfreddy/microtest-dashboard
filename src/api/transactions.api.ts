import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_CAMPAY_BASE_URL || 'https://demo.campay.net/api',
  headers: {
    "Content-Type": "application/json",
    'Authorization': `Token ${process.env.VUE_APP_CAMPAY_TOKEN}`
  }
});

//  Withdraw funds
export async function withdrawMoney(playload: WithdrawReq) {
  try {
    const { data } = await axiosInstance.post<WithdrawRes>(`/withdraw/`, JSON.stringify(playload));
    return [null, data];
  } catch (error) {
    return [error];
  }
}

export async function getTransactionStatus(reference: string) {
  try {
    const { data } = await axiosInstance.get<StatusRes>(`/transaction/${reference}/`);
    return [null, data];
  } catch (error) {
    return [error];
  }
}

// https://dev.to/blindkai/managing-api-layers-in-vue-js-with-typescript-hno