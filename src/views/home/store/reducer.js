import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  currentPage: 1,
  showScroll: false
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_HOME_DATA:
      return state.merge({
        topicList: action.topicList,
        articleList: action.articleList,
        recommendList: action.recommendList
      })

    case actionTypes.ADD_ARTICLE_DATA:
      return state.merge({
        currentPage: action.page,
        // immutable 对象也具有 .concat() 方法
        articleList: state.get('articleList').concat(action.data)
      })

    case actionTypes.CHANGE_SHOW_SCROLL:
      return state.set('showScroll', action.flag)
    
    default:
      return state
  }
}