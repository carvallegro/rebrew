import React from 'react'
import { TextField } from 'bold-ui'

export const SpellCastingTime = ({ value, ...props }) => (
  <TextField
    required
    name="casting_time"
    label="Casting time"
    placeholder="Reaction, 1 action..."
    value={value}
    {...props}
  />
)

export default SpellCastingTime
