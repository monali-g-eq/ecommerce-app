import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    selectProduct: null,
  },
  reducers: {
    addToCart: (state, action) => {
      const item = state.cart.find((i) => i.id === action.payload.id);
      if(item){
        item.quantity += 1;
      }else{
        state.cart.push({ ...action.payload , quantity: 1})
      }
    },
    increment: (state , action) => {
      const item = state.cart.find((i) => i.id === action.payload);
      if(item) item.quantity += 1;
    },
    decrement: (state , action) => {
      const item = state.cart.find((i) => i.id === action.payload);
      if(item && item.quantity > 1) {
        item.quantity -= 1
      }
    },
    removeCart: (state , action) => {
        return{
            cart: state.cart.filter((_, index) => index !== action.payload)
        }
       
    }
},

});


export const { addToCart , increment , decrement,  removeCart} = cartSlice.actions;

export default cartSlice.reducer;
