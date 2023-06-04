import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    totalPrice: 0,
  },
  reducers: {
    updateTotalPrice(state, action) {
      state.totalPrice += action.payload;
    },
  },
});

export const { updateTotalPrice } = cartSlice.actions;

export default cartSlice.reducer;
