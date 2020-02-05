import React from 'react'
import { TextField } from 'bold-ui'

export const SpellName = props => (
  <TextField
    required
    id="name"
    name="name"
    label="Name"
    placeholder="Enter the spell name"
    {...props}
  />
)

export default SpellName
