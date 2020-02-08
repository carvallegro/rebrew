import * as R from 'ramda'
import React, { Fragment } from 'react'
import { navigate } from '@reach/router'
import { Breadcrumbs, Link, Text, VFlow } from 'bold-ui'

import SpellForm from '../../components/spell-form'
import { SpellIntroduction } from '../../components/spell-form/component'

import connect from './connect'

const EditBreadcrumb = ({ spellName }) => (
  <Breadcrumbs>
    <Link
      color="inherit"
      textDecoration="none"
      onClick={() => navigate('../../spells')}
    >
      Spells
    </Link>
    <Link color="inherit" textDecoration="none">
      Edit {spellName}
    </Link>
  </Breadcrumbs>
)

const EditSpellPage = ({ spellName, spell }) => (
  <VFlow vSpacing={1.5} style={{ maxWidth: '800px' }}>
    <EditBreadcrumb spellName={spellName} />
    {!R.isEmpty(spell) && (
      <Fragment>
        <SpellIntroduction />
        <SpellForm mode="edit" spell={spell} />
      </Fragment>
    )}
    {R.isEmpty(spell) && (
      <Fragment>
        <Text component="p" fontSize={1}>
          There is no spell with that name.
        </Text>
        <Text component="p" fontSize={1}>
          <Link onClick={() => navigate('../../spells')}>Go back</Link>
        </Text>
      </Fragment>
    )}
  </VFlow>
)

export default connect(EditSpellPage)
