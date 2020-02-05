import React from 'react'
import { TextField } from 'bold-ui'

export const SpellDuration = ({ value, ...props }) => (
  <TextField
    required
    name="duration"
    label="Duration"
    placeholder="Instaneous, 1 minute, 1 hour..."
    {...props}
  />
)

export default SpellDuration
