import { Action } from './index'

export const toggleDarkMode: Action = ({ state }) => {
  state.darkMode = !state.darkMode
}
