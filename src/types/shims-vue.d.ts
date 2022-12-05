/* eslint-disable */
declare module '*.vue' {
  import type {DefineComponent} from 'vue'
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