import React, { PureComponent }  from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import {
  LoginWrapper,
  LoginBox,
  Input,
  Button
} from './style'
import { actionCreators } from '../login/store';

class Login extends PureComponent {
  render() {
    const { login, isLogin, account, password, handleAccountChange, handlePasswordChange } = this.props
    if (!isLogin) {
      return (
        <LoginWrapper>
          <LoginBox>
            {/* 利用 ref 也能获取 styledComponent 组件的 dom 元素 */}
            <Input placeholder="账号" value={ account } onChange={ handleAccountChange } ref={ (input) => this.account = input }/>
            <Input placeholder="密码" value={ password } onChange={ handlePasswordChange } ref={ (input) => this.password = input }/>
            <Button onClick={() => login(this.account, this.password)}>登录</Button>
          </LoginBox>
        </LoginWrapper>
      )
    } else {
      return (
        <Redirect to="/" />
      )
    }
  }
}

const mapStateToProps = (state) => ({
  isLogin: state.getIn(['login', 'isLogin']),
  account: state.getIn(['login', 'account']),
  password: state.getIn(['login', 'password'])
})

const mapDispatchToProps = (dispatch) => ({
  login(accountElem, passwordElem) {
    const account = accountElem.value
    const password = passwordElem.value
    dispatch(actionCreators.login(account, password))
  },
  handleAccountChange(e) {
    const account = e.target.value
    dispatch(actionCreators.changeAccount(account))
  },
  handlePasswordChange(e) {
    const password = e.target.value
    dispatch(actionCreators.changePassword(password))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)