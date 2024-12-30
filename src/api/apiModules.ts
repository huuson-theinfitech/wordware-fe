import axiosInstance from './axiosInstance'

export interface IStatisticsUser {
  screen_name: string
}

const apiModules = {
  queryStatisticsUser: async (data: IStatisticsUser) => {
    const response = await axiosInstance.post('api/v1/lookback/generate_lookback', data)
    return response.data
  }
}

export default apiModules
