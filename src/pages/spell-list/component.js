import * as R from 'ramda'
import copy from 'clipboard-copy'

import React, { Fragment, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { navigate } from '@reach/router'
import {
  Button,
  ButtonGroup,
  Cell,
  Checkbox,
  Grid,
  Heading,
  Icon,
  TextField,
  Tooltip,
  VFlow
} from 'bold-ui'

import { spellLevels } from '../../spell-utils'
import SpellCard from '../../components/spell-card'

const formatResult = R.pipe(
  R.sortBy(R.prop('name')),
  R.groupBy(R.prop('level_number'))
)

const filterByNameCaseInsensitive = searchValue =>
  R.filter(spell =>
    R.includes(searchValue.trim().toLowerCase())(spell.name.toLowerCase())
  )

const SpellList = ({ spellGroups }) => (
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
)

export const SpellListPage = ({ spells = [] }) => {
  const [searchValue, updateSearch] = useState('')
  const [includeSrd, setIncludeSrd] = useState(true)

  const spellGroups = useMemo(() => {
    if (searchValue.length && searchValue.length < 3) {
      return formatResult(spells)
    }

    return R.pipe(
      R.reject(spell => spell.srd && !includeSrd),
      filterByNameCaseInsensitive(searchValue),
      formatResult
    )(spells)
  }, [searchValue, includeSrd, spells])

  return (
    <VFlow>
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

        <Cell>
          <ButtonGroup>
            <Tooltip text="Copy to clipboard" placement="bottom-end">
              <Button
                kind="normal"
                skin="outline"
                size="medium"
                style={{ padding: 'calc(0.75rem - 1px)' }}
                onClick={() =>
                  copy(
                    JSON.stringify(Object.values(spellGroups).reduce(R.concat))
                  )
                }
              >
                <Icon icon="copyOutline" />
              </Button>
            </Tooltip>
            <Button
              kind="primary"
              skin="default"
              size="medium"
              style={{ padding: 'calc(0.75rem - 1px) 2rem' }}
              onClick={() => navigate('spells/create')}
            >
              <Icon icon="plus" style={{ marginRight: '0.2rem' }} />
              Add
            </Button>
          </ButtonGroup>
        </Cell>
      </Grid>

      <SpellList spellGroups={spellGroups} />
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
