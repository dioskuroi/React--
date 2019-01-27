import * as actionTypes from './actionTypes'

export const getDetailData = (data) => ({
  type: actionTypes.GET_DETAIL_DATA,
  data
})

export const changeDetailData = (data) => ({
  type: actionTypes.CHANGE_DETAIL_DATA,
  title: data.title,
  content: data.content
})