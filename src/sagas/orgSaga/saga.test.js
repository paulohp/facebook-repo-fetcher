import { call, put } from  'redux-saga/effects'
import * as types from './types'
import {  init, fetchRepositories } from './saga'

describe('fetch organization repositories', () => {
  const initGen = init()

  it('should call init', () => {
    expect(initGen.next().value).toEqual(call(fetchRepositories))
  })

  it('on success dispatch success action', () => {
    const repositories = {data: []}
    expect(initGen.next(repositories).value).toEqual(put({
        type: types.API_CALL_ORG_SUCCESS,
        payload: {
          repositories: [],
        },
      }))
  })
})