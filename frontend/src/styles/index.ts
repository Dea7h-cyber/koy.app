import { darkTheme } from './darkTheme'
import { lightTheme } from './lightTheme'

export { lightTheme }
export * from './darkTheme'
export * from './global'

export type ThemeType = typeof lightTheme | typeof darkTheme
