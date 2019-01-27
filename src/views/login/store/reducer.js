import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'
const defaultState = fromJS({
  isLogin: false,
  account: '',
  password: ''
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_IS_LOGIN:
      return state.set('isLogin', action.data)
    case actionTypes.LOGOUT:
      return state.set('isLogin', action.data)
    case actionTypes.CHANGE_ACCOUNT:
      return state.set('account', action.data)
    case actionTypes.CHANGE_PASSWORD:
      return state.set('password', action.data)
    default:
      return state
  }
}