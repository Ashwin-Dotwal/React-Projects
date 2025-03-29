
import { configureStore } from "@reduxjs/toolkit";
import pasteReducer from "./redux/pasteSlice"; // Ensure this path is correct

export const store = configureStore({
  reducer: {
    paste: pasteReducer,
  },
});
