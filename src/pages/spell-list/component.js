import * as R from 'ramda'
import React, { Fragment, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { navigate } from '@reach/router'
import {
  Button,
  Cell,
  Checkbox,
  Grid,
  Heading,
  Icon,
  TextField,
  VFlow
} from 'bold-ui'

import { spellLevels } from '../../spell-utils'
import SpellCard from '../../components/spell-card'

export const SpellListPage = ({ spells = [] }) => {
  const [spellGroups, setSpellGroups] = useState({})
  const [searchValue, updateSearch] = useState('')
  const [includeSrd, setIncludeSrd] = useState(true)

  useEffect(() => {
    if (searchValue.length && searchValue.length < 3) {
      return
    }

    const searchResult = R.pipe(
      R.reject(spell => spell.srd && !includeSrd),
      R.filter(spell =>
        R.includes(searchValue.trim().toLowerCase())(spell.name.toLowerCase())
      ),
      R.sortBy(R.prop('name')),
      R.groupBy(R.prop('level_number'))
    )(spells)

    setSpellGroups(searchResult)
  }, [searchValue, includeSrd, spells])

  return (
    <VFlow>
      {spellListHeader(searchValue, updateSearch, includeSrd, setIncludeSrd)}

      <Grid gap={2} gapVertical={1} wrap>
        {Object.keys(spellGroups).length === 0 && (
          <Cell xs={12}>
            <Heading level={3}>
              <i>No result</i>
            </Heading>
          </Cell>
        )}
        {Object.values(
          R.mapObjIndexed(
            (spell, key) => (
              <Fragment key={key}>
                <Cell xs={12}>
                  <Heading level={2}>{spellLevels[key].label}</Heading>
                </Cell>
                {spell.map(displaySpell)}
              </Fragment>
            ),
            spellGroups
          )
        )}
      </Grid>
    </VFlow>
  )
}

SpellListPage.propTypes = {
  spells: PropTypes.array.isRequired
}

const displaySpell = (spell, index) => (
  <Cell key={index} lg={3} md={4} sm={6} xs={12}>
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

const spellListHeader = (
  searchValue,
  updateSearch,
  includeSrd,
  setIncludeSrd
) => (
  <Grid gap={0.5} alignItems="center">
    <Cell lg={3} md={3} sm={4} xs={12}>
      <TextField
        icon="zoomOutline"
        iconPosition="left"
        name="search-spell-by-name"
        placeholder="Type spell name"
        value={searchValue}
        onChange={e => updateSearch(e.target.value)}
      />
    </Cell>

    <Cell lg={2} md={3} sm={4} xs={12}>
      <Checkbox
        label="Include SRD content"
        name="include-srd"
        checked={includeSrd}
        onChange={() => setIncludeSrd(!includeSrd)}
      />
    </Cell>

    <Cell lg={1} md={1} sm={1} xs={12}>
      <Button
        kind="primary"
        skin="default"
        size="medium"
        onClick={() => navigate('spells/create')}
      >
        <Icon icon="plus" style={{ marginRight: '0.5rem' }} />
        Add
      </Button>
    </Cell>
  </Grid>
)
