import { createSlice } from "@reduxjs/toolkit";

export const dietSlice = createSlice({
  name: "diet",
  initialState: {
    user: null,
    login: [],
    personDetail: [],
    dietList: [],
    listDetail: null,
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
    dietList: (state, action) => {
      state.dietList = action.payload;
    },
    listDetail: (state, action) => {
      state.listDetail = action.payload;
    },
  },
});

export const { logout, login, person, dietList, listDetail } =
  dietSlice.actions;
export default dietSlice.reducer;
