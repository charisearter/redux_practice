// Create a Redux Slice

import { createSlice } from '@reduxjs/toolkit';

// Creating SLice requires string name to identify the slice, an initial state vale and one or more reducer functions to define how state can be updated.

// After creating, export the generated Redux action creators and the reducer function for the whole slice

export const counterSlice = createSlice({
	name: 'counter', // slice name
	initialState: {
		value: 0, // initial state of slice and value
	},
	reducers: {
		// actions that user may take
		increment: (state) => {
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
		},
		incrementByAmount: (state, action) => {
			state.value += action.payload;
		},
	},
});

// generated action creators for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// selector -- allows us to select a state
export const selectCount = (state) => state.counter.value;

export default counterSlice.reducer;
// import in store
