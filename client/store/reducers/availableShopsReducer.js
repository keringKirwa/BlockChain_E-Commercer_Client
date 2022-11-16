import { createSlice } from "@reduxjs/toolkit";

export const availableShopsSlice = createSlice({
  name: "allShops",
  initialState: {
    allShopsArray: [],
  },

  reducers: {
    populateAvailableShops: (state, action) => {
      state.allShopsArray = action.payload.shopArray;
    },
  },
});

export const { populateAvailableShops } = availableShopsSlice.actions;

export default availableShopsSlice.reducer;
