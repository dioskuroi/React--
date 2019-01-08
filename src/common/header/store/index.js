// 将 store 下所有的文件都从 index.js 中导出，方便其他文引用并管理
import reducer from './reducer'
import * as actionTypes from './actionTypes'
import * as actionCreators from './actionCreators'

export  { reducer, actionTypes, actionCreators }