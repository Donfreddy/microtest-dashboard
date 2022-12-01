declare type UserData = {
  displayName: string | null,
  email: string | null
}
  | null

declare type UserState = {
  loggedIn: boolean,
  data: UserData
}

