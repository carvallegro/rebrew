import React from 'react'

import SpellCard from './index'

export default {
  component: SpellCard,
  title: 'Spell card'
}

export const defaultRender = () => (
  <SpellCard
    spellName="Alter Self"
    levelNumber={2}
    school="Enchantment"
    castingTime="1 action"
    range="Self"
    components="V, S"
    duration="Concentration, up to 1 hour"
    desc="You assume a different form. When you cast the spell, choose one of the following options, the effects of which last for the duration of the spell. While the spell lasts, you can end one option as an action to gain the benefits of a different one.\nAquatic Adaptation: You adapt your body to"
  />
)
