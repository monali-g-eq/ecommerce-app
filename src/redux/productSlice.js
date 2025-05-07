import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
  cart: [],
  selectedProducts: null,
};

const saveCartToLocalStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
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
      const { id, size, color } = action.payload;
      const existingItem = state.cart.find(
        (item) => item.id === id && item.size === size && item.color === color
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity || 1;
      } else {
        state.cart.push({ ...action.payload, quantity: action.payload.quantity || 1 });
      }
      saveCartToLocalStorage(state.cart); 
    },
    removeCartProduct: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      saveCartToLocalStorage(state.cart);
    },
    increaseQuantity: (state, action) => {
      const item = state.cart.find((p) => p.id === action.payload.id);
      if (item) item.quantity = (item.quantity || 1) + 1;
      saveCartToLocalStorage(state.cart);
    },
    decreaseQuantity: (state, action) => {
      const item = state.cart.find((p) => p.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
      saveCartToLocalStorage(state.cart);
    },
    setCartFromStorage: (state, action) => {
      state.cart = action.payload;
    }
  },
});

export const {
  setProducts,
  selectedProducts,
  addCartProduct,
  removeSelectedProducts,
  removeCartProduct,
  increaseQuantity,
  setCartFromStorage, 
  decreaseQuantity,
} = productSlice.actions;

export default productSlice.reducer;
