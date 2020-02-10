import React from 'react'
import BackgroundTable from '../../components/background-table'
import { Heading, VFlow } from 'bold-ui'

const BackgroundListPage = ({ backgrounds = [] }) => (
  <VFlow vSpacing={1}>
    <Heading level={1}>Backgrounds</Heading>

    <BackgroundTable backgrounds={backgrounds} />
  </VFlow>
)

export default BackgroundListPage
