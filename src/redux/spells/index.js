import { createSlice } from '@reduxjs/toolkit'

import srdSpells from './srd_spells'

const spellsSlice = createSlice({
  name: 'spells',
  initialState: srdSpells,
  reducers: {
    createSpell: (state, { payload }) => [...state, payload]
  }
})

export const spellsReducer = spellsSlice.reducer

export const { createSpell } = spellsSlice.actions
