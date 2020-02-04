import { configureStore, combineReducers } from '@reduxjs/toolkit'

import { featsReducer } from './feats'
import { spellsReducer } from './spells'

export const store = configureStore({
  reducer: combineReducers({
    feats: featsReducer,
    spells: spellsReducer
  })
})
