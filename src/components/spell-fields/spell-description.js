import { TextArea } from 'bold-ui'
import React from 'react'
import SpellComponents from './spell-components'

export const SpellDescription = ({ value, ...props }) => (
  <TextArea
    name="description"
    label="Description"
    required
    placeholder="Enter the description"
    {...props}
  />
)

export default SpellDescription
