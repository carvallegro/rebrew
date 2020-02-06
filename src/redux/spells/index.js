import * as R from 'ramda'
import { createSlice } from '@reduxjs/toolkit'

import srdSpells from './srd_spells'

/*
 JQ command to index spells by name:
  jq 'INDEX(.name)' spells_file.json > srd_spells.json
 */
const spellsSlice = createSlice({
  name: 'spells',
  initialState: srdSpells,
  reducers: {
    saveSpell: (state, { payload }) => ({
      ...state,
      [payload.name]: payload
    }),
    deleteSpell: (state, { payload }) => R.omit([payload], state)
  }
})

export default spellsSlice.reducer

export const { saveSpell, deleteSpell } = spellsSlice.actions
