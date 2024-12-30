import { useMutation } from '@tanstack/react-query'
import apiModules from '../api/apiModules'
import { useEffect } from 'react'

const useQueryStatisticsUser = () => {
  const queryParameters = new URLSearchParams(window.location.search)
  const user = queryParameters.get('user_name')

  const mutation = useMutation({
    mutationFn: async () => {
      return apiModules.queryStatisticsUser({
        screen_name: user ?? ''
      })
    }
  })

  useEffect(() => {
    if (user) {
      mutation.mutate()
    }
  }, [user])

  return { ...mutation }
}

export default useQueryStatisticsUser
