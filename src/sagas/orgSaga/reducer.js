import * as types from './types'

export const init = () => {
  return {
    type: types.API_CALL_ORG_REQUEST,
    payload: {},
    error: null
  }
}

const ACTION_HANDLERS = {
  [types.API_CALL_ORG_SUCCESS]: (state, action) => {
    return { ...state, ...action.payload }
  },
  [types.API_CALL_ORG_FAILURE]: (state, action) => {
    return { ...state, ...action.payload, error: action.error }
  },
  [types.API_CALL_ORG_REQUEST]: (state, action) => {
    return { ...state, ...action.payload, error: null }
  }
}

let defaultState = {
  repositories: [],
}

export const reducer = (state = defaultState, action) => {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}