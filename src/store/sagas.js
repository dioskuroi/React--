import { takeEvery, put } from 'redux-saga/effects'
import { actionTypes, actionCreators } from '../common/header/store'
import { getHeaderList } from '../api/getData'

function* getHeaderListHandle() {
  const { data } = yield getHeaderList()
  if (data.success === true) {
    yield put(actionCreators.changeHeaderList(data.data))
  }
}

function* appSaga() {
  yield takeEvery(actionTypes.GET_HEADER_LIST, getHeaderListHandle)
}

export default appSaga