import * as R from 'ramda'
import { createSelector } from '@reduxjs/toolkit'

const selectAllSpellsIndexedByName = R.pathOr([], ['spells'])

export const selectAllSpells = createSelector(
  selectAllSpellsIndexedByName,
  Object.values
)

export const selectAllSpellNames = createSelector(
  selectAllSpellsIndexedByName,
  Object.keys
)

export const selectSpellByName = (state, { spellName }) =>
  R.pathOr([], ['spells', spellName], state)
