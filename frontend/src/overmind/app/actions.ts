import { Action } from '../'

export const setTitle: Action<string> = ({ state }, title) => {
  state.title = title
}

export const setLoading: Action<boolean> = ({ state }, loading) => {
  state.loading = loading
}
