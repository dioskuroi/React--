// 利用 styled API 来创建具有私有样式的组件
import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

// 用法：styled.标签名`样式`，在双引号中填写样式
// 如果需要在标签上加入属性，可以写成：styled.标签名.attrs({属性名：值})`样式`
// styled-components 支持 & 标识符
export const HeaderWrapper = styled.div`
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`;

export const WidthLimit = styled.div`
  margin: 0 auto;
  min-width: 768px;
  max-width: 1440px;
  height: 100%;
`

export const Logo = styled.a.attrs({
  href: '/'
})`
  width: 100px;
  height: 100%;
  display: block;
  float: left;
  background: url(${logoPic});
  background-size: contain;
`
export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
  padding: 0 15px;
`

export const NavItem  = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;

  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  padding: 0 20px;
  margin-top: 9px;
  margin-left: 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  &::placeholder {
    color: #999;
  }
`

export const Addition = styled.div`
  float: right;
  height: 100%;
`

export const Button = styled.button`
  float: left;
  margin-top: 9px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  margin-right: 20px;
  padding: 0 20px;
  font-size: 14px;

  &.reg {
    color: #ec6149;
  }

  &.writting {
    color: #fff;
    background: #ec6149;
  }
`