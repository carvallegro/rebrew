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
    createSpell: (state, { payload }) => ({
      ...state,
      [payload.name]: payload
    })
  }
})

export const spellsReducer = spellsSlice.reducer

export const { createSpell } = spellsSlice.actions
