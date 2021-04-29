import React from 'react'
import { TextField } from 'bold-ui'

export const BackgroundFeatName = props => (
  <TextField
    required
    id="feature"
    name="feature"
    placeholder="Background feat name"
    {...props}
  />
)

export default BackgroundFeatName
