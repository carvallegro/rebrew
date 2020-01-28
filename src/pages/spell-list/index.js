import * as R from 'ramda'
import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  Cell,
  Checkbox,
  FormControl,
  Grid,
  Heading,
  HFlow,
  Icon,
  Select,
  TextField,
  VFlow
} from 'bold-ui'

import connect from './connect'
import SpellCard from '../../components/spell-card'
import { getSpellLevelDisplayText } from '../../utils'

const displaySpell = (spell, index) => (
  <Cell key={index} md={3} sm={6} xs={12}>
    <SpellCard
      spellName={spell.name}
      srd={spell.srd}
      levelNumber={spell.level_number}
      school={spell.school}
      castingTime={spell.casting_time}
      range={spell.range}
      components={spell.components}
      duration={spell.duration}
      desc={spell.desc}
    />
  </Cell>
)

const SpellListPage = ({ spells = [] }) => {
  const [searchValue, updateSearch] = useState('')
  const [includeSrd, setIncludeSrd] = useState(true)

  const filteredSpells = R.pipe(
    R.filter(R.propEq('srd', includeSrd)),
    R.filter(R.propSatisfies(R.includes(searchValue.trim()), 'name')),
    R.sortBy(R.prop('name')),
    R.groupBy(R.prop('level_number'))
  )(spells)

  return (
    <VFlow>
      <HFlow hSpacing={0.5} alignItems="center">
        <TextField
          icon="zoomOutline"
          iconPosition="left"
          name="search-spell-by-name"
          placeholder="Type spell name"
          value={searchValue}
          onChange={e => updateSearch(e.target.value)}
        />

        <Checkbox
          label="Include SRD content"
          name="include-srd"
          checked={includeSrd}
          onChange={() => setIncludeSrd(!includeSrd)}
        />

        <Button kind="primary" skin="default" size="medium" disabled>
          <Icon icon="plus" style={{ marginRight: '0.5rem' }} />
          Add
        </Button>
      </HFlow>

      <Grid gap={2} gapVertical={1} wrap>
        {Object.values(
          R.mapObjIndexed(
            (spell, key) => (
              <Fragment key={key}>
                <Cell xs={12}>
                  <Heading level={2}>{getSpellLevelDisplayText(key)}</Heading>
                </Cell>
                {spell.map(displaySpell)}
              </Fragment>
            ),
            filteredSpells
          )
        )}
      </Grid>
    </VFlow>
  )
}

SpellListPage.propTypes = {
  spells: PropTypes.array.isRequired
}

export default connect(SpellListPage)
