import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
// 引入 withRouter 可以包装一下组件就可以在组件中使用 this.props.history.push() 来操作路由了
import { withRouter } from 'react-router-dom'
import { actionCreators } from './store'
import Topic from './components/topic'
import List from './components/list'
import Recommend from './components/recommend'
import Writer from './components/writer'
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style'

// 当使用了 immutable.js 后，可以使用 PureComponent 来优化 React 的性能，
// PureComponent 相比于 Component ，内部自动添加了 shouldComponentUpdate 的生命周期函数，
// 如果这个组件的数据没有发生变化，就不会重新执行 render 函数。
// 注意：如果项目中没有用 immutalbe.js 管理数据，却使用了 PureComponent 可能会有潜在的问题。
// 推荐做法：1. 使用 immutable.js 来管理数据，使用 PureComponent 来创建组件。
//         2. 使用 Component 来创建组件，自己手动在组件中添加 shouldComponentUpdate 生命周期函数优化性能。
class Home extends PureComponent {
  handleBackTop() {
    window.scrollTo(0, 0)
  }

  bindEvent() {
    window.addEventListener('scroll', this.props.changeScrollShow)
  }

  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-image" alt="banner 图片" src="https://upload.jianshu.io/admin_banners/web_images/4602/249f8f28449b109dfd49c10347d654abada7fbfe.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
          <Topic></Topic>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <Writer></Writer>
        </HomeRight>
        {
          this.props.showScroll ? <BackTop onClick={ this.handleBackTop }>顶部</BackTop> : null
        }
      </HomeWrapper>
    )
  }

  // 需要在生命周期中获取数据时，最好统一写在 view 中，不要在每个 component 中单独获取数据
  componentDidMount() {
    this.props.getHomeData()
    this.bindEvent()
    // 使用 this.props.history.push() 来操作路由
    // setTimeout(() => {
    //   this.props.history.push({ pathname: '/detail', query: { id: 1 } })
    // }, 1000);
  }
}

const mapStateToProps = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatchToProps = (dispatch) => ({
  getHomeData() {
    dispatch(actionCreators.getHomeData())
  },
  changeScrollShow() {
    const threshold = 100
    if (document.documentElement.scrollTop > threshold) {
      dispatch(actionCreators.changeShowScroll(true))
    } else {
      dispatch(actionCreators.changeShowScroll(false))
    }
  }
})

// 利用 withRouter 高阶组件来包装 Home 组件
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home))