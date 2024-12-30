import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles'
import { RouterProvider } from 'react-router-dom'
import { routerConfig } from './config/router'
import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'

function App() {
  const theme = createTheme()
  const queryClient = new QueryClient({
    queryCache: new QueryCache(),
    mutationCache: new MutationCache()
  })
  return (
    <QueryClientProvider client={queryClient}>
      <MUIThemeProvider theme={theme}>
        <RouterProvider router={routerConfig} />
      </MUIThemeProvider>
    </QueryClientProvider>
  )
}

export default App
