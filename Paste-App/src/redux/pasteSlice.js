import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

// Ensure safe JSON parsing
const getPastesFromStorage = () => {
  try {
    const storedPastes = localStorage.getItem("pastes");
    return storedPastes ? JSON.parse(storedPastes) : [];
  } catch (error) {
    console.error("Error parsing localStorage:", error);
    return []; // Return empty array if parsing fails
  }
};

const initialState = {
  pastes: getPastesFromStorage(),
};

export const pasteSlice = createSlice({
  name: 'pastes',
  initialState,
  reducers: {
    addToPastes: (state, action) => {
      const newPastes = [...state.pastes, action.payload];
      localStorage.setItem("pastes", JSON.stringify(newPastes));
      state.pastes = newPastes;
      
      toast.success("Paste Created Successfully");
    },

    updateToPastes: (state, action) => {
      const updatedPastes = state.pastes.map(paste =>
        paste._id === action.payload._id ? action.payload : paste
      );
      localStorage.setItem("pastes", JSON.stringify(updatedPastes));
      state.pastes = updatedPastes;

      toast.info("Paste Updated Successfully");
    },

    resetAllPastes: (state) => {
      localStorage.removeItem("pastes");
      state.pastes = [];
      
      toast.warn("All Pastes Reset");
    },

    removeFromPastes: (state, action) => {
      const filteredPastes = state.pastes.filter(paste => paste._id !== action.payload);
      localStorage.setItem("pastes", JSON.stringify(filteredPastes));
      state.pastes = filteredPastes;

      toast.error("Paste Removed");
    },
  },
});

// Export actions
export const { addToPastes, updateToPastes, resetAllPastes, removeFromPastes } = pasteSlice.actions;

// Export reducer
export default pasteSlice.reducer;
