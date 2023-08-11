// Import the createSlice to create a new slice of state
import { createSlice } from '@reduxjs/toolkit'

// Slice of STATE (pie) specifically for the Counter component
export const countSlice = createSlice({
  // Name of the state object
  name: 'count',

  // Setting the initial value of state
  initialState: {
    value: 0
  },

  // Reducers is an object with action properties that are methods to interact with state logic
  // Will be dispatched from the User interface
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    }
  }
})

// Export the state value to be used in a selector hook
export const countSelector = state => state.count.value

// Export the reducer ACTIONS to be used to interact with state elsewhere
export const { increment, decrement } = countSlice.actions

// Exports the slice's reducer to the store and anywhere else it may be needed
export default countSlice.reducer