import { configureStore, combineReducers } from '@reduxjs/toolkit'

import featsReducer from './feats'
import spellsReducer from './spells'

const store = configureStore({
  reducer: combineReducers({
    feats: featsReducer,
    spells: spellsReducer
  })
})

export default store
