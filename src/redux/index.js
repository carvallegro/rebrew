import { configureStore, combineReducers } from '@reduxjs/toolkit'

import featsReducer from './feats'
import spellsReducer from './spells'

import {
  offlineLoad,
  offlineMiddleware,
  offlineReducerListener
} from './offline-storage'

const reducer = offlineReducerListener(
  combineReducers({
    feats: featsReducer,
    spells: spellsReducer
  })
)

export const store = configureStore({
  reducer: reducer,
  middleware: [offlineMiddleware]
})

offlineLoad(store)
  .then(newState => console.log('Loaded state:', newState))
  .catch(() => console.log('Failed to load previous state'))
