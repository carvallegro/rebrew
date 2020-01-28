import { createSlice } from '@reduxjs/toolkit'

import srdSpells from './srd_spells'

const spellsSlice = createSlice({
  name: 'spells',
  initialState: srdSpells
})

export const spellsReducer = spellsSlice.reducer
