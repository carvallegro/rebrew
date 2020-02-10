import { TextArea } from 'bold-ui'
import React from 'react'

export const SpellDescription = ({ value, ...props }) => (
  <TextArea
    id="text"
    name="text"
    label="Wrapper"
    required
    placeholder="Enter the description"
    value={value}
    {...props}
  />
)

export default SpellDescription
