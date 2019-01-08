// 引入 immutable 中 的 fromJS API 来创建 immutable 对象
// immutable 对象中的数据是不可被改变了，同时对象提供两个API
// .get() 方法来获取对象中的数据
// .set() 方法会将你需要设置的值结合之前 immutable 对象的值，返回一个全新的 immutable 对象
import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'
const defaultState = fromJS({
  focused: false
})

export default (state = defaultState, action) => {
  if (action.type === actionTypes.SEARCH_FOCUS) {
    // 利用 .set(键， 值) 方法来设置值
    return state.set('focused', true)
  }

  if (action.type === actionTypes.SEARCH_BLUR) {
    return state.set('focused', false)
  }

  return state
}