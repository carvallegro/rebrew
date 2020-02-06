import React from 'react'
import SpellForm from '../spell-form'
import { Breadcrumbs, Link, VFlow } from 'bold-ui'
import { navigate } from '@reach/router'
import { SpellIntroduction } from '../spell-form/component'
import connect from './connect'

const EditBreadcrumb = () => (
  <Breadcrumbs>
    <Link
      color="inherit"
      textDecoration="none"
      onClick={() => navigate('../spells')}
    >
      Spells
    </Link>
    <Link color="inherit" textDecoration="none">
      Edit
    </Link>
  </Breadcrumbs>
)

const EditSpellPage = ({ spellName, spell }) => (
  <VFlow vSpacing={1.5} style={{ maxWidth: '800px' }}>
    <EditBreadcrumb />

    <SpellIntroduction />

    {spell && <SpellForm mode="edit" spell={spell} />}
  </VFlow>
)

export default connect(EditSpellPage)
