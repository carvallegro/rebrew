import React from 'react'
import { TextField } from 'bold-ui'
import SpellComponents from './spell-components'

export const SpellName = props => (
  <TextField
    required
    name="name"
    label="Name"
    placeholder="Enter the spell name"
    {...props}
  />
)

export default SpellName
