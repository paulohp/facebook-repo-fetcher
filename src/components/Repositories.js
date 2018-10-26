import React from 'react'
import { Column, Panel, PanelHeading, PanelBlock, PanelIcon, Notification } from 'bloomer'

const Repositories = ({repositories, handleRepoClick, isSize, error}) => (
  <Column isSize={isSize}>
    <Panel>
      <PanelHeading>Repositories</PanelHeading>
      {error ? (
        <Notification isColor="danger">
          <p><span role="img" aria-label="Stop">🛑 </span> Something went wrong fetching the repositories list <span role="img" aria-label="Stop"> ❌</span></p>
        </Notification>
      ) : null }
      { !error && repositories.map((repo, i) => (
        <PanelBlock key={i} onClick={() => handleRepoClick(repo)} href="#">
          <PanelIcon><span role="img" aria-label="Book">📘</span></PanelIcon>
          {repo.name} ({repo.watchers_count})
        </PanelBlock>
      ))}
    </Panel>
  </Column>
)

export default Repositories