import React, { Component } from 'react';
import { Provider } from 'react-redux'

import store from './store'
import Header from './common/header'
// 利用 styled-components 可以创建具有作用域到 css 样式
// 引入全局样式
import ResetStyle from './style';
import IconStyle from './statics/icon/iconfont'

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        {/* 利用 styled-components API 定义的全局样式也是一个 class 组件，
        需要按照 react 组件的写法将样式写入应用中 */}
        <ResetStyle />
        <IconStyle />

        <Header></Header>
      </Provider>
    );
  }
}

export default App;
