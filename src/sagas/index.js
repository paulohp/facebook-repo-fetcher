import { all, fork } from 'redux-saga/effects'
import orgSaga from './orgSaga/saga'
import repoSaga from './repoSaga/saga'
import contributorsSaga from './contributorsSaga/saga'

export default function* root() {
  yield all([
    fork(orgSaga),
    fork(repoSaga),
    fork(contributorsSaga),
  ])
}