import { call, put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'
import * as types from './types'

let defaultState = {
  repository: null
}

export const fetchRepository = (name) => {
  return axios({
    method: 'GET',
    url: `https://api.github.com/repos/facebook/${name}`
  })
}

export function* repositoryWorker(action) {
  const { repository: params } = action
  const { data: repository } = yield call(fetchRepository, params.name)
  yield put({
    type: types.API_CALL_REPO_SUCCESS,
    payload: {
      ...defaultState,
      repository
    }
  })
  yield put({
    type: "API_CALL_CONTRIBUTORS_REQUEST",
    params,
    payload: {
      fetching: true
    }
  })
}

export default function* sagas() {
  yield takeLatest(types.API_CALL_REPO_REQUEST, repositoryWorker)
}