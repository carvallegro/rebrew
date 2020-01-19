import { configureStore, combineReducers } from '@reduxjs/toolkit'

import { featsReducer } from './feats'

export const store = configureStore({
  reducer: combineReducers({
    feats: featsReducer
  })
})
