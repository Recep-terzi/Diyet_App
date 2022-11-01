import { configureStore } from "@reduxjs/toolkit";
import dietSlice from "./dietSlice";

export const store = configureStore({
  reducer: {
    diet: dietSlice,
  },
});
