import * as R from 'ramda'
import React from 'react'
import * as PropTypes from 'prop-types'
import { FormControl, Select } from 'bold-ui'

import { spellSchools } from '../../spell-utils'
import SpellComponents from './spell-components'

export const SpellSchool = ({ value, ...props }) => {
  return (
    <FormControl label="School" htmlFor="school" required>
      <Select
        required
        name="school"
        placeholder="Divination, Abjuration, Necromancy..."
        items={spellSchools}
        itemToString={R.identity}
        value={value}
        {...props}
      />
    </FormControl>
  )
}

SpellSchool.propTypes = {
  value: PropTypes.string
}

export default SpellSchool
