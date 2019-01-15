// 利用 combineReducers API 可以将多个 reducer 组合在一起
// import { combineReducers } from 'redux'
// 利用 redux-immutable 提供的 combineReducers API 可以将 state 也变成一个 immutable 对象
// 这样可以让代码风格统一，在获取或操作 state 中的数据时都使用 immutable 提供的 API
import { combineReducers } from 'redux-immutable'

import { reducer as headerReducer } from '../common/header/store'
import { reducer as homeReducer } from '../views/home/store'

// 用法：combineReducers({ 子 reducer 的名字: 子 reducer })
// 当组合以后，使用 state 中的数据时就会多一层子 reducer 的名称包裹，
// 这是为了防止多个子 reducer 的 命名冲突
export default combineReducers({
  header: headerReducer,
  home: homeReducer
})