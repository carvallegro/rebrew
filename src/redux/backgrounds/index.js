import { createSlice } from '@reduxjs/toolkit'

import srdBackgrounds from './srd-backgrounds'

const backgroundsSlice = createSlice({
  name: 'backgrounds',
  initialState: srdBackgrounds
})

export default backgroundsSlice.reducer
