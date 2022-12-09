import { configureStore } from "@reduxjs/toolkit";
import menuReducer from './menu'
import cartReducer from './cart'

const store = configureStore({ reducer: { menu: menuReducer, cart: cartReducer } });

export default store;
