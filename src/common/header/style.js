// 利用 styled API 来创建具有私有样式的组件
import styled from 'styled-components'
import logoPic from '../../statics/images/logo.png'

// 用法：styled.标签名`样式`，在双引号中填写样式
// 如果需要在标签上加入属性，可以写成：styled.标签名.attrs({属性名：值})`样式`
// styled-components 支持 & 标识符
export const HeaderWrapper = styled.div`
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`

export const WidthLimit = styled.div`
  margin: 0 auto;
  min-width: 768px;
  max-width: 1440px;
  height: 100%;
`

export const Logo = styled.div`
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

export const SearchWrapper = styled.div`
  float: left;
  position: relative;

  /* 在 styled-components 中也可以是用嵌套编程的方式写 css */
  .zoom {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;

    &.focused {
      background: #777;
      color: #fff;
    }
  }
`

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 260px;
  height: 38px;
  padding: 0 38px 0 20px;
  color: #666;
  margin-top: 9px;
  margin-left: 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  transition: all .4s ease-out;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 350px;
  }
`

export const SearchInfo = styled.div`
  position: absolute;
  left: 20px;
  top: 56px;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2);
  background: #fff;
`

export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`

export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;

  .spin {
    float: left;
    font-size: 12px;
    text-align: center;
    line-height: 1;
    margin-right: 2px;
    margin-top: 5px;
    transform-origin:  5px 6px ;

    &.rotate {
      transition: all .3s ease;
      transform: rotate(720deg);
    }
  }
`

export const SearchInfoList = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`

export const SearchInfoItem = styled.li`
  cursor: pointer;
  line-height: 20px;
  padding: 0 5px;
  margin-right: 10px;
  margin-bottom: 10px;
  font-size: 12px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 3px;

  &:hover {
    color: #333;
    border-color: #b4b4b4;
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