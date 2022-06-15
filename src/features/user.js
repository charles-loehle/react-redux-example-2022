import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = {
	name: '',
	age: 0,
	email: '',
};

export const userSlice = createSlice({
	name: 'user',
	initialState: { value: initialStateValue },
	reducers: {
		login: (state, action) => {
			state.value = action.payload;
			console.log(action.payload);
		},
		logout: (state, action) => {
			state.value = initialStateValue;
			console.log(state.value);
		},
	},
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
