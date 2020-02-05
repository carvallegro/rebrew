import * as R from 'ramda'
import React from 'react'
import { FormControl, Select } from 'bold-ui'

import { spellLevels } from '../../spell-utils'

export const SpellType = ({ value, ...props }) => (
  <FormControl label="Type" htmlFor="level_number" required>
    <Select
      id="level_number"
      name="level_number"
      placeholder="Cantrip, 1st level..."
      required
      items={spellLevels}
      itemToString={R.prop('label')}
      value={spellLevels[value]}
      {...props}
    />
  </FormControl>
)

export default SpellType
