import React from 'react'
import { Text } from 'bold-ui'

import { Wrapper } from './styles'

const NewlinesToParagraphs = ({ text }) => (
  <Wrapper>
    {text.split('\n').map((text, i) => (
      <Text key={i} component="p" fontSize={1}>
        {text}
      </Text>
    ))}
  </Wrapper>
)

export default NewlinesToParagraphs
