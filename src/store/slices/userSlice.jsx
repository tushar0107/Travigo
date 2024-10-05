import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
	initialState:{},
	name:'user',
	reducers:{
		loginUser(state,action){
			state.value = action.payload;
		},
		logoutUser(state){
			state.value = {}
		}
	}
});


export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;