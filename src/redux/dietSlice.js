import { createSlice } from "@reduxjs/toolkit";

export const dietSlice = createSlice({
  name: "diet",
  initialState: {
    user: null,
    login: [],
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { logout, login } = dietSlice.actions;
export default dietSlice.reducer;
