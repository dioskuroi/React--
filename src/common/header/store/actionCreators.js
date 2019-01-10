import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

export const searchFocus = () => ({
  type: actionTypes.SEARCH_FOCUS
})

export const searchBlur = () => ({
  type: actionTypes.SEARCH_BLUR
})

export const getHeaderList = () => ({
  type: actionTypes.GET_HEADER_LIST
})

export const changeHeaderList = ( data ) => ({
  type: actionTypes.CHANGE_HEADER_LIST,
  // 传给 reducer 时，需要将复杂类型的数据转化为 immutable 对象
  data: fromJS(data),
  // 计算得到 totalPage 的值
  totalPage: Math.ceil(data.length / 10)
})

export const mouseEnter = () => ({
  type: actionTypes.MOUSE_ENTER
})

export const mouseLeave = () => ({
  type: actionTypes.MOUSE_LEAVE
})

export const changePage = (page, totalPage) => ({
  type: actionTypes.CHANGE_PAGE,
  page,
  totalPage
})