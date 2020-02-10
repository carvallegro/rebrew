import { configureStore, combineReducers } from '@reduxjs/toolkit'

import featsReducer from './feats'
import spellsReducer from './spells'
import backgroundsReducer from './backgrounds'

const store = configureStore({
  reducer: combineReducers({
    backgrounds: backgroundsReducer,
    feats: featsReducer,
    spells: spellsReducer
  })
})

export default store
