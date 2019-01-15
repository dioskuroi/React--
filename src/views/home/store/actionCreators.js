import * as actionTypes from './actionTypes'
// fromJS API 能将整个传入的对象或数组变成一个 immutable 对象，其内部的对象或数组也会变成 immutable 对象
// List API 只能将最外层的数组变成 immutable 对象。
import { fromJS } from 'immutable'

export const getHomeData = () => ({
  type: actionTypes.GET_HOME_DATA
})

export const changeHomeData = (data) => ({
  type: actionTypes.CHANGE_HOME_DATA,
  topicList: fromJS(data.topicList),
  articleList: fromJS(data.articleList),
  recommendList: fromJS(data.recommendList)
})

export const getMoreList = (data) => ({
  type: actionTypes.GET_MORE_LIST,
  data
})

export const addArticleData = (data, page) => ({
  type: actionTypes.ADD_ARTICLE_DATA,
  data: fromJS(data),
  page
})

export const changeShowScroll = (flag) => ({
  type: actionTypes.CHANGE_SHOW_SCROLL,
  flag
})