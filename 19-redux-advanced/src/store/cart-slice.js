import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  changed: false,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    replaceCart(state, action) {
      state.items = action.payload.items;
    },
    addItem(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      state.changed = true;
      if (existingItem) {
        existingItem.quantity++;
        existingItem.total = existingItem.quantity * existingItem.price;
      } else {
        state.items.push(action.payload);
      }
    },
    removeItem(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload
      );
      state.changed = true;
      if (--existingItem.quantity === 0) {
        state.items = state.items.filter((item) => item.id !== action.payload);
      } else {
        existingItem.total = existingItem.quantity * existingItem.price;
      }
    },
  },
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
