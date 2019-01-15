import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
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

class Header extends PureComponent {
  // 定义一个函数，根据 this.props.focused 来判断是否显示热门搜索框
  // 如果需要显示，返回热门搜索框的 jsx，如果不需要返回 null
  // 这种方法相当于 vue 里的 v-if
  getListArea() {
    const { focused, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage, page, totalPage, list } = this.props
    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={ handleMouseEnter }
          onMouseLeave={ handleMouseLeave }
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
            // 将获取到的 i 标签传入 handleChangePage 中进行 dom 操作
              onClick={ () => handleChangePage(page, totalPage, this.spin) }
            >
              <i 
                className="iconfont spin"
                // 利用 ref 获取 i 标签，进行 dom 操作
                ref={(spin) => this.spin = spin}
              >&#xe851;</i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            { this.getSearchInfoItem(list, page, totalPage) }
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }

  getSearchInfoItem(list, page, totalPage) {
    // 利用 immutable 对象的 toJS API 能返回一个相同的 js 对象
    const mutableList = list.toJS()
    // 如果 list 没有数据不用循环渲染
    if (mutableList.length < 1) return null
    
    const pageList = []
    const min = (page - 1) * 10
    // 解决 bug：当是最大 page 时，应该循环到 list.length，否则会超过数组大最大 length，渲染多余盒子
    const max = page === totalPage ? mutableList.length : page * 10
    for (let i = min; i < max; i++) {
      const item = mutableList[i]
      pageList.push(<SearchInfoItem key={ item }>{ item }</SearchInfoItem>)
    }
    return pageList
  }

  render() {
    const { focused, list, handleInputFocus, handleInputBlur } = this.props
    return (
      <HeaderWrapper>
        <WidthLimit>
          {/* Link 组件用来实现路由的跳转，to 属性用来设置跳转的路径 */}
          <Link to="/">
            <Logo />
          </Link>
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
                onFocus={ () => handleInputFocus(list) }
                onBlur={ handleInputBlur }
                className={focused ? 'focused' : ''}
              />
              <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>
                &#xe623;
              </i>
              {/* 调用 getListArea 将 focused 传入，用来判断是否显示热门搜索框 */}
              { this.getListArea( focused ) }
            </SearchWrapper>
          </Nav>
        </WidthLimit>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = state => ({
  // 注意：使用了 combineReducers 后，会多一层数据的嵌套，嵌套的名称就是你定义的子 reducer 名称
  // 利用 immutable 对象的 get 方法来获取对象中的数据
  // 可以利用链式调用来获取 header 中的 focused 的值
  // focused: state.get('header').get('focused')
  // 也可以利用 getIn 方法进行简写
  // 用法：.getIn([第一级，第二级,...])
  focused: state.getIn(['header', 'focused']),
  mouseIn: state.getIn(['header', 'mouseIn']),
  page: state.getIn(['header', 'page']),
  totalPage: state.getIn(['header', 'totalPage']),
  list: state.getIn(['header', 'list'])
})

const mapDispatchToProps = dispatch => ({
  handleInputFocus(list) {
    // 避免无意义的请求，如果 list 有数据，就不用再发送 ajax 请求
    const noData = 0
    list.size === noData && dispatch(actionCreators.getHeaderList())
    dispatch(actionCreators.searchFocus())
  },
  handleInputBlur() {
    dispatch(actionCreators.searchBlur())
  },
  handleMouseEnter() {
    dispatch(actionCreators.mouseEnter())
  },
  handleMouseLeave() {
    dispatch(actionCreators.mouseLeave())
  },
  handleChangePage(page, totalPage, spin) {
    spin.classList.add('rotate')
    setTimeout(() => {
      spin.classList.remove('rotate')
    }, 300);
    dispatch(actionCreators.changePage(page, totalPage))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
