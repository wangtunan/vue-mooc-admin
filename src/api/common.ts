import axios from 'utils/axios'
import { ResponseConfig } from 'types/ajax'

export function getHotList (): Promise<ResponseConfig>  {
  return axios.get('/mock/common/hot.json')
}
