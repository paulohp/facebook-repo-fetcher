import { connect } from 'react-redux'

import App from './App'

import { init } from './sagas/orgSaga/reducer'
import { onRequestRepo } from './sagas/repoSaga/reducer'

const mapStatetoProps = state => {
  return {
    repositories: state.orgSaga.repositories,
    orgError: state.orgSaga.error,
    repository: state.repoSaga.repository,
    contributors: state.contributorsSaga.contributors,
    contributorsError: state.contributorsSaga.error,
    isFetchingContribs: state.contributorsSaga.fetching
  }
}

const mapDispatchToProps = dispatch => {
  return {
    init: () => {
      dispatch(init())
    },
    onRequestRepo: (repo) => {
      dispatch(onRequestRepo(repo))
    },
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(App)