import React, { Fragment } from 'react'
// 引入 BrowserRouter 和 Route 组件
import { BrowserRouter, Route } from 'react-router-dom'
import Home from '../views/home'
import Detail from '../views/detail'
import Header from '../common/header'


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
        <Route path="/detail" exact component={ Detail }></Route>
      </Fragment>
    </BrowserRouter>
  )
}

export default AppRouter