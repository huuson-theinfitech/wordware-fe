import { createBrowserRouter, Navigate } from 'react-router-dom'
import HomePages from '../pages/home'
import AccountStatisticsPage from '../pages/statistic/AccountStatisticsPage'

export const routerConfig = createBrowserRouter([
  {
    path: '*',
    element: <Navigate to='/home' />
  },
  {
    path: '/home',
    element: <HomePages />
  },
  {
    path: '/statistic',
    element: <AccountStatisticsPage />
  }
])
