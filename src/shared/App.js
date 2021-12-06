import styled, { ThemeProvider } from 'styled-components'
import GlobalStyles from './GlobalStyles'
import theme from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Test>hi!</Test>
      <a>hi!</a>
    </ThemeProvider>
  )
}

const Test = styled.p`
  background-color: ${({ theme }) => theme.color.background};
  color: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.fontSize.xl};
`

export default App
