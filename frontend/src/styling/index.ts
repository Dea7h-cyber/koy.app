import { darkTheme } from './darkTheme'
import { lightTheme } from './lightTheme'

export { lightTheme, darkTheme }
export * from './global'
export type DefaultTheme = typeof lightTheme | typeof darkTheme
