export enum USER_ROLES {
  ADMIN = 'Admin',
  USER = 'User',
  BLOCKED = 'Blocked',
}

export interface User {
  id: string
  username: string
  email: string
  role: USER_ROLES
}

export interface UserState {
  isAuth: boolean | null
  details: User | null
}
