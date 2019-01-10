// 引入 immutable 中 的 fromJS API 来创建 immutable 对象
// immutable 对象中的数据是不可被改变了，同时对象提供两个API
// .get() 方法来获取对象中的数据
// .set() 方法会将你需要设置的值结合之前 immutable 对象的值，返回一个全新的 immutable 对象
import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'
const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  page: 1,
  totalPage: 1,
  // 注意：此时的 list 也是一个 immutable 对象，一个 immutable 中的所有数组或者对象都是一个 immutable 对象
  // 所以，当改变 list 时，.set('list', data)方法中传入的 data 也需要是一个 immutable 对象
  list: []
})

export default (state = defaultState, action) => {
  // 利用 switch-case 语法代替多个 if 语句
  switch (action.type) {
    case actionTypes.SEARCH_FOCUS:
      // 利用 .set(键， 值) 方法来设置值
      return state.set('focused', true)
    
    case actionTypes.SEARCH_BLUR:
      return state.set('focused', false)
    
    case actionTypes.CHANGE_HEADER_LIST:
      // return state.set('list', action.data).set('totalPage', action.page)
      // 当同时设置 immutable 对象中的两个属性时，可以使用链式编程，但是性能不好，推荐使用 merge 方法
      return state.merge({
        list: action.data,
        totalPage: action.totalPage
      })

    case actionTypes.MOUSE_ENTER:
      return state.set('mouseIn', true)
    
    case actionTypes.MOUSE_LEAVE:
      return state.set('mouseIn', false)

    case actionTypes.CHANGE_PAGE:
      // 改变 page
      if ( action.page < action.totalPage ) {
        return state.set('page', action.page + 1)
      } else {
        return state.set('page', 1)
      }
    
    default:
      return state
  }
  // if (action.type === actionTypes.SEARCH_FOCUS) {
  //   // 利用 .set(键， 值) 方法来设置值
  //   return state.set('focused', true)
  // }

  // if (action.type === actionTypes.SEARCH_BLUR) {
  //   return state.set('focused', false)
  // }

  // if (action.type === actionTypes.CHANGE_HEADER_LIST) {
  //   return state.set('list', action.data)
  // }

  // return state
}