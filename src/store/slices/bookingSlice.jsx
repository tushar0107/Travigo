import { createSlice } from "@reduxjs/toolkit";

const bookingSlice = createSlice({
	initialState: {
		hotel:[],
		bus:[],
		flight:[]
	},
	name: 'booking',
	reducers:{
		addBooking(state,action){
			var bookingFiltered = state[action.payload.type].filter((ele)=> {return ele.bookingId === action.payload.bookingId});
			if(bookingFiltered.length<1){
				state[action.payload.type] = [...state[action.payload.type],action.payload];
			}
			console.log('state',state);
		},
		removeBooking(state,action){
			var bookFiltered = state[action.payload.type].filter((ele)=> {return ele.bookingId !== action.payload.bookingId});
			state[action.payload.type] = bookFiltered;
			console.log('state',state);
		},
	}
});

export const { addBooking, removeBooking } = bookingSlice.actions;
export default bookingSlice.reducer;