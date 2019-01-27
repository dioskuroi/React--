import React, { Fragment } from 'react'
// 引入 BrowserRouter 和 Route 组件
import { BrowserRouter, Route,  } from 'react-router-dom'
import Home from '../views/home'
// 将引入的组件改为 loadable 包装后导出的组件即可实现异步加载组件
import Detail from '../views/detail/loadable'
import Header from '../common/header'
import Login from '../views/login'


const AppRouter = () => {
  return (
    // BrowserRouter 用来包裹所有 Route 和 Link 组件
    <BrowserRouter>
      <Fragment>
        {/* 由于在 header 组件中运用了 react-router-dom 的 Link 组件，
            所以需要将 header 组件放在 BrowserRouter 中，否则会报错
         */}
        <Header></Header>
        {/* Route 组件的 path 属性用来设置跳转路径，exact 属性设置路径的严格匹配，
            component 属性用来设置跳转到该路径时显示的组件
        */}
        <Route path="/" exact component={ Home }></Route>
        {/* 利用地址栏传参有两种方式：
              1. path="/detail/:id"，和 Vue 的传参方式一样，获取参数的方法为：this.props.match.params.id
              2. this.props.history.push({ pathname: '/detail', query: { id: id } })，
                 获取参数的方法：this.props.location.query.id
        */}
        <Route path="/detail/:id" exact component={ Detail }></Route>
        <Route path="/login" exact component={ Login }></Route>
      </Fragment>
    </BrowserRouter>
  )
}

export default AppRouter