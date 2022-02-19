import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%; /* 1rem = 10px */
    @media (min-width: 1980px) {
      font-size: 68.75%; /* 1rem = 11px */
    };
    @media (max-width: 1200px) {
      font-size: 56.25%; /* 1rem = 9px */
    }
    @media (max-width: 600px) {
      font-size: 50%; /* 1rem = 8px */
    }
  }
  html,
  body,
  #root {
    text-rendering: optimizeLegibility;
    -webkit-overflow-scrolling: touch;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
    background: #fff;
  }
  body,
  input,
  button,
  textarea {
    font: 500 1.8rem Roboto, sans-serif;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }
  h1 {
    font-size: 8.1rem;
  }
  h2 {
    font-size: 5.4rem;
  }
  h3 {
    font-size: 3.6rem;
  }
  h4 {
    font-size: 2.4rem;
  }
  button {
    cursor: pointer;
  }
  a:link {
    text-decoration: none;
  }
  li {
    list-style: none;
  }
`