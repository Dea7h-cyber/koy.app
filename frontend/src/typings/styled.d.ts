import { lightTheme } from '../styles'

declare module 'styled-components' {
  export type DefaultTheme = typeof lightTheme
}
