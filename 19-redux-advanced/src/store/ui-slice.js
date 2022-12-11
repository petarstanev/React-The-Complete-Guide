import { createSlice } from "@reduxjs/toolkit";

const initialState = { isVisible: true, notification: null };
const uiSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    changeVisible(state) {
      state.isVisible = !state.isVisible;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export default uiSlice.reducer;
export const menuActions = uiSlice.actions;
