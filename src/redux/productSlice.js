import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
  cart: [],
  selectedProducts: null,
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.product = action.payload;
    },
    selectedProducts: (state, action) => {
      state.selectedProducts = action.payload;
    },
    removeSelectedProducts: (state) => {
      state.selectedProducts = {};
    },
    addCartProduct: (state, action) => {
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    },
    removeCartProduct: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    increaseQuantity: (state, action) => {
      const item = state.cart.find((p) => p.id === action.payload.id);
      if (item) item.quantity = (item.quantity || 1) + 1;
    },
    decreaseQuantity: (state, action) => {
      const item = state.cart.find((p) => p.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});

export const {
  setProducts,
  selectedProducts,
  addCartProduct,
  removeSelectedProducts,
  removeCartProduct,
  increaseQuantity,
  decreaseQuantity,
} = productSlice.actions;

export default productSlice.reducer;
