import { TextArea } from 'bold-ui'
import React from 'react'

export const SpellDescription = ({ value, ...props }) => (
  <TextArea
    name="desc"
    label="Description"
    required
    placeholder="Enter the description"
    {...props}
  />
)

export default SpellDescription
