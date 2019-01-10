import axios from 'axios'

export const getHeaderList = () => {
  return axios({
    url: '/mock/headerList.json'
  })
}