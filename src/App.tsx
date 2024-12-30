import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles'
import { RouterProvider } from 'react-router-dom'
import { routerConfig } from './config/router'
import './App.css'

function App() {
  const theme = createTheme()
  return (
    <MUIThemeProvider theme={theme}>
      <RouterProvider router={routerConfig} />
    </MUIThemeProvider>
  )
}

export default App
