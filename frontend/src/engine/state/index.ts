import { AppState } from 'typings'

export const state: AppState = {
  title: 'Koy.app',
  loading: true,
  darkMode: localStorage.darkMode === 'false' ? false : true,
}
