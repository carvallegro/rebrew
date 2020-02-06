import React from 'react'
import { navigate } from '@reach/router'
import { Breadcrumbs, Link, VFlow } from 'bold-ui'

import { SpellIntroduction } from '../spell-form/component'
import SpellForm from '../spell-form'

const CreateBreadcrumb = () => (
  <Breadcrumbs>
    <Link
      color="inherit"
      textDecoration="none"
      onClick={() => navigate('../spells')}
    >
      Spells
    </Link>
    <Link color="inherit" textDecoration="none">
      Create
    </Link>
  </Breadcrumbs>
)

export const CreateSpellPage = () => (
  <VFlow vSpacing={1.5} style={{ maxWidth: '800px' }}>
    <CreateBreadcrumb />

    <SpellIntroduction />

    <SpellForm mode="create" />
  </VFlow>
)

export default CreateSpellPage
