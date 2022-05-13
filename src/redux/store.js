import { configureStore } from '@reduxjs/toolkit'
import habitDataReducer from './reducers/HabitSlice'
export const store = configureStore({
  reducer: {
    habitData: habitDataReducer 
  },
})