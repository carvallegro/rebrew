import * as R from 'ramda'

export const selectAllSpells = R.pathOr([], ['spells'])
