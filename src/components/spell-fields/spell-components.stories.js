import React from 'react'
import { action } from '@storybook/addon-actions'
import { SpellComponents } from './spell-components'

export default {
  title: 'Spell Fields/Components',
  component: SpellComponents
}

export const defaultRender = () => (
  <SpellComponents onChange={action('component-change')} />
)
