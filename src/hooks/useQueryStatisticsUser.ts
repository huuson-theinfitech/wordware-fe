import { useQuery } from '@tanstack/react-query'
import apiModules from '../api/apiModules'

const useQueryStatisticsUser = (userName: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ['statisticsUser', userName],
    queryFn: () =>
      apiModules.queryStatisticsUser({
        screen_name: userName
      }),
    enabled: !!userName
  })

  return {
    data: data,
    isLoading: isLoading
  }
}

export default useQueryStatisticsUser
