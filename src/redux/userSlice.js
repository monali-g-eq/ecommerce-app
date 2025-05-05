import { createSlice } from '@reduxjs/toolkit'

export const dataSlice = createSlice({
  name: 'products',
  initialState: {
   products: [],
   selectProduct: null,
  },
  reducers: {
    setProduct: (state, action) => {
        state.products = action.payload;
      },
  
      selectProduct: (state, action) => {
        state.selectProduct = action.payload;
      },
  }
})


export const { setProduct , selectProduct } = dataSlice.actions

export default dataSlice.reducer