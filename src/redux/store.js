import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './features/counter/counterSlice'
import { activeLinkSlice } from './features/link-active/link-active'
export const store = configureStore({
  reducer: {
    counter:counterSlice,
    activeLink:activeLinkSlice
  },
})