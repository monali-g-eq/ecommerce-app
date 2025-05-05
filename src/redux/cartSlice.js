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
    addToCart: (state, action) => {
      const { product, quantity } = action.payload;
      const existingItem = state.selectedItems.find(
        (item) => item.id === product.id
      );

      if(existingItem){
        existingItem.quantity = quantity
      }else{
        state.selectedItems.push({...product, quantity})
      }
    
      state.totalQuantity += quantity
      state.totalPrice += product.price * quantity;
    
    }
    ,
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
    
  },
});

export const {
  setProducts,
  setLoading,
  setError,
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
} = cartSlice.actions;
export default cartSlice.reducer;
