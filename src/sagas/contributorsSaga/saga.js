import { call, put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'
import * as types from './types'

let defaultState = {
  contributors: null,
  fetching: false
}

export const fetchContributors = (name) => {
  return axios({
    method: 'GET',
    url: `https://api.github.com/repos/facebook/${name}/stats/contributors`
  })
}

export function* contributorsWorker(action) {
  try {
    const { params } = action
    const { data } = yield call(fetchContributors, params.name)
    const contributors = [...data].sort((a, b) => parseFloat(b.total) - parseFloat(a.total))
    yield put({
      type: types.API_CALL_CONTRIBUTORS_SUCCESS,
      payload: {
        ...defaultState,
        contributors,
        fetching: false,
      },
    })
  } catch(error) {
    yield put({
      type: types.API_CALL_CONTRIBUTORS_FAILURE,
      payload: {
        fetching: false
      },
      error
    })
  }
}

export default function* sagas() {
  yield takeLatest(types.API_CALL_CONTRIBUTORS_REQUEST, contributorsWorker)
}