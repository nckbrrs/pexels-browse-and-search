import { createGlobalStyle } from 'styled-components'
import tw, { theme, GlobalStyles as BaseStyles, css } from 'twin.macro'

const CustomStyles = createGlobalStyle`
  :root {
    /* --max-width: 1100px; */
  }

  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
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
