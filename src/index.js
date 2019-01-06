import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
// 利用 styled-components 可以创建具有作用域到 css 样式
// 引入全局样式
import GlobalStyle from './style';
import App from './App';

const Application = (
  <Fragment>
    <App />
    {/* 利用 styled-components API 定义的全局样式也是一个 class 组件，需要按照 react 组件的写法将样式写入应用中 */}
    <GlobalStyle />
  </Fragment>
)

ReactDOM.render(Application, document.getElementById('root'));

