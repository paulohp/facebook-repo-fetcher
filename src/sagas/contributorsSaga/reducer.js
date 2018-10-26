import * as types from './types'

export const onRequestRepo = (contributors) => {
  return {
    type: types.API_CALL_CONTRIBUTORS_REQUEST,
    contributors,
    payload: {
      fetching: true
    },
  }
}

const ACTION_HANDLERS = {
  [types.API_CALL_CONTRIBUTORS_SUCCESS]: (state, action) => {
    return { ...state, ...action.payload }
  },
  [types.API_CALL_CONTRIBUTORS_FAILURE]: (state, action) => {
    return { ...state, ...action.payload, error: action.error }
  },
  [types.API_CALL_CONTRIBUTORS_REQUEST]: (state, action) => {
    return { ...state, ...action.payload, error: null }
  }
}

let defaultState = {
  contributors: null,
  error: false
}

export const reducer = (state = defaultState, action) => {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}