import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

// Create an empty Redux store and export it
// add reducer to store

export default configureStore({
	reducer: {
		// name given in slice: slice.reducer == sliceReducer
		counter: counterReducer,
	},
});
