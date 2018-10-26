import React, { Component } from 'react'
import { Columns, Column, Notification, Title } from 'bloomer'

import RepositoriesList from './components/Repositories'
import Repository from './components/Repository'

import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.props.init()
  }
  handleRepoClick = (repo) => {
    this.props.onRequestRepo(repo)
  }
  render() {
    const { repositories, repository, contributors, isFetchingContribs, contributorsError, orgError } = this.props
    return (
      <Columns isCentered>
        <RepositoriesList isSize="1/4" repositories={repositories} handleRepoClick={this.handleRepoClick} error={orgError} />
        <Column isSize="3/4">
          { repository ? (
            <Repository repository={repository} contributors={contributors} isFetchingContribs={isFetchingContribs} error={contributorsError} />
          ) : (
            <Notification isColor='info'>
              <Title isSize={1}>Nothing selected</Title>
              <p><span role="img" aria-label="Left">👈🏻</span> Click on a item in the left.</p>
            </Notification>
          )}
        </Column>
    </Columns>

    );
  }
}

export default App;
