import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
	initialState:'',
	name:'app',
	reducers:{
		setColorScheme(state,action){
			state = action.payload;
		}
	}
});

export const {setColorScheme} = appSlice.actions;
export default appSlice.reducer;