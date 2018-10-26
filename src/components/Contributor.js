import React from 'react';
import { Column } from 'bloomer'
import CardComponent from './Card'

const Contributor = ({ contributor }) => (
  <Column isSize='1/3'>
    <CardComponent contributor={contributor} />
  </Column>
)

export default Contributor