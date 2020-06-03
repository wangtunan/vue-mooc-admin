import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

const service = axios.create({
  baseURL: process.env.VUE_BASE_URL,
  timeout: 1000
})

service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config
  },
  (error: any) => {
    Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response: AxiosResponse) => {
    const { status, data } = response
    if (status === 200) {
      return data
    }
  },
  (error: any) => {
    return Promise.reject(error)
  }
)

export default service
