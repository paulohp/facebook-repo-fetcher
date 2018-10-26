import { call, put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'
import * as types from './types'

let defaultState = {
  repositories: []
}

export const fetchRepositories = () => {
  return axios({
    method: 'GET',
    url: 'https://api.github.com/orgs/facebook/repos'
  })
}

export function* init() {
  try {
    const { data } = yield call(fetchRepositories)
    const repositories = [...data].sort((a, b) => parseFloat(b.watchers_count) - parseFloat(a.watchers_count))
    yield put({
      type: types.API_CALL_ORG_SUCCESS,
      payload: {
        ...defaultState,
        repositories
      }
    })
  } catch(error) {
    yield put({
      type: types.API_CALL_ORG_FAILURE,
      payload: {},
      error
    })
  }
}

export default function* sagas() {
  yield takeLatest(types.API_CALL_ORG_REQUEST, init)
}