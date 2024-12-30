import { createBrowserRouter, Navigate } from 'react-router-dom'
import HomePages from '../pages/home/HomePage'
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
    path: '/statistic/:username',
    element: <AccountStatisticsPage />
  }
])
