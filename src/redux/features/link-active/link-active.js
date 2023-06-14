import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isActive: null,
}

export const activeLinkSlice = createSlice({
  name: 'linkActive',
  initialState,
  reducers: {
    active: (state,action) => {
      state.value = action.payload
    },
    unactive: (state) => {
      state.value = null
    },
  },
})

// Action creators are generated for each case reducer function
export const { active, unactive } = activeLinkSlice.actions

export default activeLinkSlice.reducer