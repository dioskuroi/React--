import React, { Component } from 'react'
import {
  HeaderWrapper,
  WidthLimit,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button
} from './style'

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <WidthLimit>
          <Logo></Logo>
          <Addition>
            <Button className="reg">注册</Button>
            <Button className="writting">写文章</Button>
          </Addition>
          <Nav>
            <NavItem className="left active">首页</NavItem>
            <NavItem className="left">下载App</NavItem>
            <NavItem className="right">登录</NavItem>
            <NavItem className="right">Aa</NavItem>
            <NavSearch />
          </Nav>
        </WidthLimit>
      </HeaderWrapper>
    )
  }
}

export default Header