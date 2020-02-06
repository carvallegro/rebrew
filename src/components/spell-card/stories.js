import React from 'react'
import { action } from '@storybook/addon-actions'

import SpellCard from './component.js'

export default {
  component: SpellCard,
  title: 'Spell card'
}

export const srdSpell = () => (
  <SpellCard
    spellName="Alter Self"
    srd
    levelNumber={2}
    school="Enchantment"
    castingTime="1 action"
    range="Self"
    components="V, S"
    duration="Concentration, up to 1 hour"
    desc={`You assume a different form. When you cast the spell, choose one of the following options, the effects of which last for the duration of the spell. While the spell lasts, you can end one option as an action to gain the benefits of a different one.\nAquatic Adaptation: You adapt your body to`}
  />
)

export const homebrewSpell = () => (
  <SpellCard
    spellName="Blinding Flash"
    levelNumber={5}
    school="Illusion"
    castingTime="1 action"
    range="30 feet"
    components="S, M"
    duration="1 minute"
    desc={`A creature within range is subjected to a blinding flash before its eyes. The target must make both a Constitution saving throw and a Dexterity saving throw. If the target succeeds on both saves, nothing happens. If the target fails one save but succeeds on the other, it is blinded for the duration. If it fails both saves, it is blinded for the duration, and stunned until the end of your next turn.\nAt the end of each of its turns, a blinded target can make a new Constitution saving throw, ending the effect on a success. It cannot make this saving throw if it is stunned or otherwise incapacitated.\nAt Higher Levels. When you cast this spell using a spell slot of 6th level or higher, you can target one additional creature for each slot level above 5th.`}
    onDelete={action('spell-delete')}
  />
)
