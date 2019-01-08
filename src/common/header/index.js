import React from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import {
  HeaderWrapper,
  WidthLimit,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  Addition,
  Button
} from './style'

// 定义一个函数，接收一个参数，用来确认是否显示热门搜索框
// 如果需要显示，返回热门搜索框的 jsx，如果不需要返回 null
// 这种方法相当于 vue 里的 v-if
const getListArea = (show) => {
  if (show) {
    return (
      <SearchInfo>
        <SearchInfoTitle>
          热门搜索
          <SearchInfoSwitch>
            换一批
          </SearchInfoSwitch>
        </SearchInfoTitle>
        <SearchInfoList>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
        </SearchInfoList>
      </SearchInfo>
    )
  } else {
    return null
  }
}

const Header = ( props ) => {
  const { focused, handleInputFocus, handleInputBlur } = props
  return (
    <HeaderWrapper>
      <WidthLimit>
        <Logo />
        <Addition>
          <Button className="reg">注册</Button>
          <Button className="writting">
            {/* 使用 unicode 编码方式来导入图标字体 */}
            <i className="iconfont">&#xe615;</i>
            写文章
          </Button>
        </Addition>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <NavSearch
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              className={focused ? 'focused' : ''}
            />
            <i className={focused ? 'focused iconfont' : 'iconfont'}>
              &#xe623;
            </i>
            {/* 调用 getListArea 将 focused 传入，用来判断是否显示热门搜索框 */}
            { getListArea( focused ) }
          </SearchWrapper>
        </Nav>
      </WidthLimit>
    </HeaderWrapper>
  )
}

const mapStateToProps = state => ({
  // 注意：使用了 combineReducers 后，会多一层数据的嵌套，嵌套的名称就是你定义的子 reducer 名称
  // 利用 immutable 对象的 get 方法来获取对象中的数据
  // 可以利用链式调用来获取 header 中的 focused 的值
  // focused: state.get('header').get('focused')
  // 也可以利用 getIn 方法进行简写
  // 用法：.getIn([第一级，第二级,...])
  focused: state.getIn(['header', 'focused'])
})

const mapDispatchToProps = dispatch => ({
  handleInputFocus() {
    dispatch(actionCreators.searchFocus())
  },
  handleInputBlur() {
    dispatch(actionCreators.searchBlur())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
