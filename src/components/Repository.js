import React from 'react'
import { Content, Columns, Title, Tag } from 'bloomer'
import Contributor from './Contributor'

const Repository = ({ repository, isFetchingContribs, contributors, error }) => (
  <Content>
      <Title isSize={1}>
        {repository.full_name}
        <Tag isColor="white"><span><span role="img" aria-label="Start">⭐️</span>{repository.stargazers_count}</span></Tag>
        <Tag isColor="white"><span><span role="img" aria-label="Eye">👁</span>{repository.watchers_count}</span></Tag>
        <Tag isColor="white"><span><span role="img" aria-label="Fork">🍴</span>{repository.forks_count}</span></Tag>
      </Title>
      <p>{repository.description}</p>
      {error ? (
        <Title isSize={4}><span role="img" aria-label="Stop">🛑 </span> Something went wrong fetching the contributors list <span role="img" aria-label="Stop"> ❌</span></Title>
      ) : (
        <Title isSize={4}>Contributors</Title>
      )}
      {isFetchingContribs ? (
        <p> <span role="img" aria-label="loading" className="loading">⏳</span> Fetching...</p>
      ) :
        <Columns isMultiline>
          { contributors && contributors.map((contributor, i) => (
            <Contributor contributor={contributor} key={i} />
          ))}
        </Columns>
      }
    </Content>
)

export default Repository