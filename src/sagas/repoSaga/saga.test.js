import { call, put } from  'redux-saga/effects'
import * as types from './types'
import {  repositoryWorker, fetchRepository } from './saga'

describe('fetch repositories', () => {
  const repositoryWorkerGen = repositoryWorker({repository: {name: 'hhvm' }})

  it('should call fetchRepository and pass hhvm as paramenter', () => {
    expect(repositoryWorkerGen.next().value).toEqual(call(fetchRepository, 'hhvm'))
  })

  it('on success dispatch success action', () => {
    const repository = {data: {}}
    expect(repositoryWorkerGen.next(repository).value).toEqual(put({
        type: types.API_CALL_REPO_SUCCESS,
        payload: {
          repository: {},
        },
      }))

      expect(repositoryWorkerGen.next(repository).value).toEqual(put({
        type:"API_CALL_CONTRIBUTORS_REQUEST",
        params: { name: 'hhvm' },
        payload: {
          fetching: true
        },
      }))
  })
})