import * as R from 'ramda'
import { createSlice } from '@reduxjs/toolkit'

import srdSpells from './srd_spells'
import { restoreData } from '../actions'

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
    deleteSpell: (state, { payload }) => R.omit([payload], state),
    importSpells: (state, { payload = {} }) => ({
      ...state,
      ...R.omit(Object.keys(srdSpells))(payload)
    })
  },
  extraReducers: {
    [restoreData]: (state, { payload }) => ({
      ...state,
      ...payload.spells
    })
  }
})

export default spellsSlice.reducer

export const { saveSpell, deleteSpell, importSpells } = spellsSlice.actions
