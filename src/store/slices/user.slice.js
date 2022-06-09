import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const userSlice = createSlice({
	name: 'user',
    initialState: "",
    reducers: {
        changeUser: (state, action) => action.payload
    }
})

export const { changeUser } = userSlice.actions;

export default userSlice.reducer;