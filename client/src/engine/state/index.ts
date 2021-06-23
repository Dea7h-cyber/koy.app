import { AppState } from 'typings'

const darkMode = localStorage.darkMode

export const state: AppState = {
  title: 'Koy.app',
  loading: true,
  darkMode: typeof darkMode === 'undefined' ? null : darkMode === 'true',
}
