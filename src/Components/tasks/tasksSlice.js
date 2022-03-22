import { createSlice } from '@reduxjs/toolkit'

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: new Date().toJSON(),
        name: action.payload.task,
      }
      state.push(newTask)
    },
    deleteTask: (state, action) =>
      state.filter(item => item.id !== action.payload.id),
  },
})

export const { addTask, deleteTask } = tasksSlice.actions

export default tasksSlice.reducer
