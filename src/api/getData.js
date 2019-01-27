import axios from 'axios'

export const getHeaderList = () => {
  return axios({
    url: '/mock/headerList.json'
  })
}

export const getHomeData = () => {
  return axios({
    url: '/mock/home.json'
  })
}

export const getMoreList = (params) => {
  return axios({
    url: '/mock/homeList.json',
    params
  })
}

export const getDetailData = (params) => {
  return axios({
    url: '/mock/detail.json',
    params
  })
}

export const login = (params) => {
  return axios({
    url: '/mock/login.json',
    params
  })
}