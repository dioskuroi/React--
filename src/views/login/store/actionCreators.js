import * as actionTypes from './actionTypes'

export const login = (account, password) => ({
  type: actionTypes.LOGIN,
  data: { account, password }
})

export const logout = () => ({
  type: actionTypes.LOGOUT,
  data: false
})

export const changeIsLogin = (data) => ({
  type: actionTypes.CHANGE_IS_LOGIN,
  data
})

export const changeAccount = (data) => ({
  type: actionTypes.CHANGE_ACCOUNT,
  data
})

export const changePassword = (data) => ({
  type: actionTypes.CHANGE_PASSWORD,
  data
})