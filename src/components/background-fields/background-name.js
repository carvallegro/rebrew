import React from 'react'
import { TextField } from 'bold-ui'

export const BackgroundName = props => (
  <TextField
    required
    id="name"
    name="name"
    placeholder="Background name"
    {...props}
  />
)

export default BackgroundName
