import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = 'purple';

export const themeSlice = createSlice({
	name: 'theme',
	initialState: { value: initialStateValue },
	reducers: {
		changeColor: (state, action) => {
			state.value = action.payload;
			console.log(action.payload);
		},
	},
});

export const { changeColor } = themeSlice.actions;

export default themeSlice.reducer;
