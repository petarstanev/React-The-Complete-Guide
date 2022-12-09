import { createSlice } from "@reduxjs/toolkit";

const initialState = { isVisible: true };
const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    changeVisible(state) {
      state.isVisible = !state.isVisible;
    },
  },
});

export default menuSlice.reducer;
export const menuActions = menuSlice.actions;
