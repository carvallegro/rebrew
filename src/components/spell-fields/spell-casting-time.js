import React from 'react'
import { TextField } from 'bold-ui'

export const SpellCastingTime = ({ value, ...props }) => (
  <TextField
    id="casting_time"
    name="casting_time"
    required
    label="Casting time"
    placeholder="Reaction, 1 action..."
    value={value}
    {...props}
  />
)

export default SpellCastingTime
