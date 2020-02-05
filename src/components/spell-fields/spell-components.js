import * as R from 'ramda'
import React from 'react'
import { FormControl, Select } from 'bold-ui'

import { spellComponents } from '../../spell-utils'

export const SpellComponents = ({ value = '', onChange, ...props }) => (
  <FormControl label="Components" required htmlFor="spellComponents">
    <Select
      id="components"
      name="components"
      multiple
      required
      placeholder="Choose amongst V, M and S"
      items={Object.values(spellComponents)}
      itemToString={R.prop('label')}
      itemIsEqual={(a, b) => a.value === b.value}
      value={value
        .split(',')
        .map(v => spellComponents[v])
        .filter(R.pipe(R.isNil, R.not))}
      onChange={v => onChange(v.map(R.prop('value')).join())}
      {...props}
    />
  </FormControl>
)

export default SpellComponents
