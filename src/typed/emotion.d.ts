import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    palette: {
      primary: {
        bg: string
        text: string
      },
      secondary: {
        bg: string
        text: string
      }
    }
  }
}

// You are also able to use a 3rd party theme this way:
import '@emotion/react'
import { LibTheme } from 'some-lib'

declare module '@emotion/react' {
  export interface Theme extends LibTheme {}
}
