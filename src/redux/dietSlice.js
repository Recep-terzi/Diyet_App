import { createSlice } from "@reduxjs/toolkit";

export const dietSlice = createSlice({
  name: "diet",
  initialState: {
    username: [],
  },
  reducers: {
    getName: (state, action) => {
      state.username = action.payload;
    },
  },
});

export const { getName } = dietSlice.actions;
export default dietSlice.reducer;
