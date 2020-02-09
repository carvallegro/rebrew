import React from 'react'

import HomepageLink from './index'

export default {
  component: HomepageLink,
  title: 'HomepageLink'
}

export const defaultRender = () => <HomepageLink text="Link Text" />

export const whenDisabled = () => <HomepageLink text="Link Text" disabled />
