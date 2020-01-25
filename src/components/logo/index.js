import React from 'react'
import PropTypes from 'prop-types'
import { Img } from './styles'

const Logo = ({ height, width }) => <Img height={height} width={width} />

Logo.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string
}

Logo.defaultProps = {
  height: '42px',
  width: '45px'
}

export default Logo
