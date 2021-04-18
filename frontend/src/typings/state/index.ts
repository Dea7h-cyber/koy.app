import { AppState } from './app'
import { UserState } from './user'

export interface State {
  app: AppState
  user: UserState
}
