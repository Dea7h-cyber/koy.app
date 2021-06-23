import { Action } from '../'

export const setTitle: Action<string> = ({ state }, title) => {
  window.document.title = title
  state.title = title
}

export const setLoading: Action<boolean> = ({ state }, loading) => {
  state.loading = loading
}

export const toggleDarkMode: Action = ({ state }) => {
  localStorage.darkMode = !state.darkMode
  state.darkMode = !state.darkMode
}
