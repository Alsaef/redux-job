import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from '../feature/api/apiSlice'
import authSlice from '../feature/auth/authSlice'
export const store = configureStore({
  reducer: {
    auth:authSlice,
    [apiSlice.reducerPath]:apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})