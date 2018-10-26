import * as types from './types'

export const init = () => {
  return {
    type: types.API_CALL_REPO_REQUEST,
    payload: {}
  }
}

export const onRequestRepo = (repository) => {
  return {
    type: types.API_CALL_REPO_REQUEST,
    repository,
    payload: {}
  }
}

const ACTION_HANDLERS = {
  [types.API_CALL_REPO_SUCCESS]: (state, action) => {
    return { ...state, ...action.payload }
  },
  [types.API_CALL_REPO_FAILURE]: (state, action) => {
    return { ...state, ...action.payload }
  },
  [types.API_CALL_REPO_REQUEST]: (state, action) => {
    return { ...state, ...action.payload }
  }
}

let defaultState = {
  repository: null,
}

export const reducer = (state = defaultState, action) => {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}