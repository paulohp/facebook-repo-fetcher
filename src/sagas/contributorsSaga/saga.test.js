import { call, put } from  'redux-saga/effects'
import * as types from './types'
import { fetchContributors, contributorsWorker } from './saga'

describe('fetch contributors', () => {
  const contributorsGen = contributorsWorker({ params: { name: 'react'} })

  it('should pass react as paramenter', () => {
    expect(contributorsGen.next().value).toEqual(call(fetchContributors, 'react'))
  })

  it('on success dispatch success action', () => {
    const contributors = { data: [] }
    expect(contributorsGen.next(contributors).value).toEqual(put({
        type: types.API_CALL_CONTRIBUTORS_SUCCESS,
        payload: {
          contributors: [],
          fetching: false
        },
      }))
  })
})