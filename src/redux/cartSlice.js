import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    items: [],
    selectedItems: [],
    status: "",
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    setProducts: (state, action) => {
      state.items = action.payload;
      state.status = "succeeded";
    },
    setLoading: (state) => {
      state.status = "loading";
    },
    setError: (state) => {
      state.status = "failed";
    },
    addTocart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const itemToRemove = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (itemToRemove) {
        state.totalQuantity -= itemToRemove.quantity;
        state.totalPrice -= itemToRemove.price * itemToRemove.quantity;
        state.selectedItems = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      }
    },
    increaseQty: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
        state.totalQuantity += 1;
        state.totalPrice += item.price;
      }
    },
  },
});

export const { setProducts, setLoading, setError } = cartSlice.actions;
export default cartSlice.reducer;
