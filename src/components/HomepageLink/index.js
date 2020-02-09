import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { navigate } from '@reach/router'
import { Icon, Paper, Text } from 'bold-ui'

const getStyle = disabled => ({
  padding: '6px 16px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  opacity: disabled ? '50%' : 'inherit',
  cursor: disabled ? 'inherit' : 'pointer'
})

const HomepageLink = ({ text, to, disabled }) => {
  const [elevation, setElevation] = useState(0)
  return (
    <Paper
      style={getStyle(disabled)}
      onClick={() => !disabled && navigate(to)}
      elevation={elevation}
      onMouseEnter={() => !disabled && setElevation(10)}
      onMouseLeave={() => !disabled && setElevation(0)}
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
  to: PropTypes.string,
  disabled: PropTypes.bool
}

export default HomepageLink
