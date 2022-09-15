import axiosBase from '../config/axiosBase'

export const getApiData = (URl) => {
  return axiosBase.get(URl).catch(error => {
    throw error
  })
}
