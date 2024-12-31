import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import apiModules from '../api/apiModules'

const useQueryStatisticsUser = (userName: string) => {
  const [localData, setLocalData] = useState<any>(null)

  useEffect(() => {
    if (userName) {
      const cachedData = localStorage.getItem(`statisticsUser_${userName}`)
      if (cachedData) {
        setLocalData(JSON.parse(cachedData))
      }
    }
  }, [userName])

  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ['statisticsUser', userName],
    queryFn: () =>
      apiModules.queryStatisticsUser({
        screen_name: userName
      }),
    enabled: !!userName && !localData
  })

  useEffect(() => {
    if (isSuccess && data) {
      localStorage.setItem(`statisticsUser_${userName}`, JSON.stringify(data))
      setLocalData(data)
    }
  }, [isSuccess, data, userName])

  return {
    data: localData || data,
    isLoading: isLoading && !localData
  }
}

export default useQueryStatisticsUser
