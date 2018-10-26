import { combineReducers } from 'redux'
import { reducer as orgSaga } from '../sagas/orgSaga/reducer'
import { reducer as repoSaga } from '../sagas/repoSaga/reducer'
import { reducer as contributorsSaga } from '../sagas/contributorsSaga/reducer'

const reducers = combineReducers({
  orgSaga,
  repoSaga,
  contributorsSaga,
})

export default reducers