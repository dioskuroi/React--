// takeEvery（action类型, 回调函数） : 用来捕获所有与之传入的类型匹配的 action，并且每次都执行回调函数
// takeLatest(action类型, 回调函数) : 用来捕获所有与之传入的类型匹配的 action，只执行最新一次都 action，
//                                  之前如果有相同 action 被匹配，会取消执行。
// take(action类型) : 用来捕获与之传入的类型匹配的 action，只执行一次，如果需要执行多次，需要循环。例如：
//    while(true) {
//      yield take('fetch_data')
//      // 执行后续操作
//    }
// put(actionCreator) : 用来派发 action
// call（异步函数, 参数1, 参数2, ...） : 用来调用异步函数，并且可以为异步函数传入参数，
//                                    当这个函数没有执行完毕返回结果时，代码会被阻塞
// fork（异步函数, 参数1, 参数2, ...） : 用来调用异步函数，并且可以为异步函数传入参数，
//                                    不管代码是否被执行完毕，代码不会阻塞
// select(state => ...) : 用来获取 store 中的数据，接受一个回调函数作为参数，该回调函数的参数是 state
import { takeEvery, put, call, takeLatest } from 'redux-saga/effects'
import {
  actionTypes as headerActionTypes,
  actionCreators as headerActionCreators
} from '../common/header/store'
import {
  actionTypes as homeActionTypes,
  actionCreators as homeActionCreators
} from '../views/home/store'
import {
  actionTypes as detailActionTypes,
  actionCreators as detailActionCreators
} from '../views/detail/store'
import {
  actionTypes as loginActionTypes,
  actionCreators as loginActionCreators
} from '../views/login/store'

import { getHeaderList, getHomeData, getMoreList, getDetailData, login } from '../api/getData'

function* getHeaderListHandler() {
  const { data } = yield call(getHeaderList)
  if (data.success === true) {
    yield put(headerActionCreators.changeHeaderList(data.data))
  }
}

function* getHomeDataHandler() {
  const { data } = yield call(getHomeData)
  if (data.success === true) {
    yield put(homeActionCreators.changeHomeData(data.data))
  }
}

function* getMoreListHandler(action) {
  const { data } = yield call(getMoreList, action.data)
  if (data.success === true) {
    yield put(homeActionCreators.addArticleData(data.data, action.data.page))
  }
}

function* getDetailDataHandler(action) {
  const { data } = yield call(getDetailData, action.data)
  if (data.success === true) {
    yield put(detailActionCreators.changeDetailData(data.data))
  }
}

function* loginHandler(action) {
  const { data } = yield call(login, action.data)
  if (data.success === true) {
    yield put(loginActionCreators.changeIsLogin(data.data))
  }
}

function* headerListSaga() {
  yield takeEvery(headerActionTypes.GET_HEADER_LIST, getHeaderListHandler)
}

function* homeDataSaga() {
  yield takeEvery(homeActionTypes.GET_HOME_DATA, getHomeDataHandler)
}

function* moreListSaga() {
  yield takeEvery(homeActionTypes.GET_MORE_LIST, getMoreListHandler)
}

function* detailDataSaga() {
  yield takeEvery(detailActionTypes.GET_DETAIL_DATA, getDetailDataHandler)
}

function* loginSaga() {
  yield takeLatest(loginActionTypes.LOGIN, loginHandler)
}

export default [headerListSaga, homeDataSaga, moreListSaga, detailDataSaga, loginSaga]
