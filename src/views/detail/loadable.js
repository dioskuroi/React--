import React from 'react'
// 利用 react-loadable 库可以异步加载 react 组件，这样就可以避免一次性将所有页面的都请求过来。
// 将 router 中引用的组件改成此文件导出的组件即可实现异步加载。
// 注意，当一个组件使用异步加载时，如果需要从 url 上获取参数，那就需要利用 react-router-dom 的
// withRouter API 进行包装一下
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  // loader 属性是一个函数，返回一个 import 函数调用，参数为组件的路径
  // 注意：这里的 import 不是 es6 的语法
  loader: () => import('./'),
  // loading 属性也是一个函数，作用是当异步组件正在加载时显示在页面上的元素
  loading() {
    return (
      <div>正在加载</div>
    )
  }
});

export default () => {
  return <LoadableComponent/>
}