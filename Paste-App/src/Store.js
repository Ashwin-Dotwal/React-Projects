
import { configureStore } from '@reduxjs/toolkit';
import pasteReducer from './redux/pasteSlice';  // Ensure path is correct

export const store = configureStore({
  reducer: {
    pastes: pasteReducer,  // Ensure correct key name
  },
});
