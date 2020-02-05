import React from 'react'
import { TextField } from 'bold-ui'

export const SpellRange = ({ value, ...props }) => (
  <TextField
    required
    id="range"
    name="range"
    label="Range"
    placeholder="Self, 30 feet, 120 feet..."
    value={value}
    {...props}
  />
)

export default SpellRange
