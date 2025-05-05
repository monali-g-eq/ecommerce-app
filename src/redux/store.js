import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./userSlice";
import cartReducer from "./cartSlice";

export default configureStore({
  reducer: { products: dataReducer, cart: cartReducer },
});
