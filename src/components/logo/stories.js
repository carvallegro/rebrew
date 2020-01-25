import React from 'react'

import Logo from './index'

export default {
  component: Logo,
  title: 'Logo'
}

export const defaultRender = () => <Logo />

export const customSizeRender = () => <Logo width="100px" height="100px" />
