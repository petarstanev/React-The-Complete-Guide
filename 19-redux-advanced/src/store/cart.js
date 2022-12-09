import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [{ title: "Test Item", quantity: 3, total: 11, price: 6 }],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      let found = false;
      for (let item of state.items) {
        if (item.title === action.payload.title) {
          item.quantity++;
          item.total = item.quantity * item.price;
          found = true;
        }
      }
      if (!found) {
        state.items = [...state.items, action.payload];
      }
    },
    removeItem(state, action) {
      for (let id in state.items) {
        const item = state.items[id];
        if (item.title === action.payload.title) {
          if (--item.quantity === 0) {
            state.items.splice(id, 1);
          } else {
            item.total = item.quantity * item.price;
          }
        }
      }
    },
  },
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
