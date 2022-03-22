import { configureStore } from '@reduxjs/toolkit'
import taskReducer from './Components/tasks/tasksSlice'

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
})
