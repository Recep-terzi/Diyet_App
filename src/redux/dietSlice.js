import { createSlice } from "@reduxjs/toolkit";

export const dietSlice = createSlice({
  name: "diet",
  initialState: {
    user: null,
    login: [],
    personDetail: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    person: (state, action) => {
      state.personDetail = action.payload;
    },
  },
});

export const { logout, login, person } = dietSlice.actions;
export default dietSlice.reducer;
