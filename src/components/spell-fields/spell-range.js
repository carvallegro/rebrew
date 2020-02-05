import { TextField } from 'bold-ui'
import React from 'react'
import SpellComponents from './spell-components'

export const SpellRange = ({ value, ...props }) => (
  <TextField
    required
    name="range"
    label="Range"
    placeholder="Self, 30 feet, 120 feet..."
    value={value}
    {...props}
  />
)

export default SpellRange
