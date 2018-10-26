import React from 'react'
import { Card, CardContent, Media, MediaLeft, Image, MediaContent, Title } from 'bloomer'

const CardComponent = ({ contributor }) => (
  <Card>
    <CardContent>
      <Media>
        <MediaLeft>
          <Image isSize='64x64' src={contributor.author.avatar_url} />
        </MediaLeft>
        <MediaContent>
          <Title isSize={4}>@{contributor.author.login}</Title>
          <small><span role="img" aria-label="Laptop">💻</span> { contributor.total } </small>
        </MediaContent>
      </Media>
    </CardContent>
  </Card>
)

export default CardComponent