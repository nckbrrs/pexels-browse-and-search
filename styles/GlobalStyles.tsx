import { createGlobalStyle } from 'styled-components'
import { theme, GlobalStyles as BaseStyles } from 'twin.macro'

// This method of specifying global styles was recommended/provided by
// the docs of twin.macro, the library I use for combining tailwind with styled components
const CustomStyles = createGlobalStyle`
  :root {

  }

  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }

    html,
    body {
      background: ${theme`colors.primary`} !important;
    }
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    background: ${theme`colors.background`}
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)

export default GlobalStyles
