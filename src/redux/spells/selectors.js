import * as R from 'ramda'
import { createSelector } from '@reduxjs/toolkit'

export const selectAllSpells = createSelector(
  R.pathOr([], ['spells']),
  Object.values
)
