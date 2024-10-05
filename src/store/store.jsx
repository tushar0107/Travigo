import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../store/slices/userSlice';
import bookingReducer from '../store/slices/bookingSlice';

export const store = configureStore({
	reducer:{
		user: userReducer,
		booking: bookingReducer,
	}
});