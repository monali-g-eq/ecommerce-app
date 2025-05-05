import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "./cartSlice";
import userSliceReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    cartSlice: cartSliceReducer,
    userSlice: userSliceReducer,
  },
});
