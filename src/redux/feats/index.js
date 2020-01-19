import { createSlice } from '@reduxjs/toolkit'

import srdFeats from './srd_feats'

const featSlice = createSlice({
  name: 'feats',
  initialState: srdFeats,
  reducers: {}
})

export const featsReducer = featSlice.reducer
