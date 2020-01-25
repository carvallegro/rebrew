import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { navigate } from '@reach/router'
import { Icon, Paper, Text } from 'bold-ui'

const style = {
  padding: '6px 16px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  cursor: 'pointer'
}

const HomepageLink = ({ text, to }) => {
  const [elevation, setElevation] = useState(0)
  return (
    <Paper
      style={style}
      onClick={() => navigate(to)}
      elevation={elevation}
      onMouseEnter={() => setElevation(10)}
      onMouseLeave={() => setElevation(0)}
    >
      <Text component="p" fontSize={1.25}>
        {text}
      </Text>
      <Icon icon="arrowRight" />
    </Paper>
  )
}

HomepageLink.propTypes = {
  HomepageLink: PropTypes.string,
  to: PropTypes.string
}

export default HomepageLink
