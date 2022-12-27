/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare interface LoginCredentials {
  email: string;
  password: string;
}

declare interface CreateUserData {
  name: string,
  email: string,
  password: string,
  phone: string,
}

declare type UserData = {
  displayName: string | null,
  email: string | null
}
  | null

declare type UserState = {
  loggedIn: boolean,
  data: UserData
}

declare interface WithdrawRes {
  reference: string
}


declare interface WithdrawReq {
  amount: string,
  to: string,
  description: string,
  external_reference?: string
}

declare interface StatusRes {
  reference: string,
  status: string,
  amount: number,
  currency: number,
  operator: number,
  code: string,
  operator_reference: string
}


