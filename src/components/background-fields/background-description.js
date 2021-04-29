import { TextArea } from 'bold-ui'
import React from 'react'

export const BackgroundDescription = ({ value, ...props }) => (
  <TextArea
    id="desc"
    name="desc"
    required
    placeholder="Enter the feat description"
    value={value}
    {...props}
  />
)

export default BackgroundDescription
