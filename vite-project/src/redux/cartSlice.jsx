// src/redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existing = state.products.find(
        item =>
          item.id === newItem.id &&
          item.selectedColor === newItem.selectedColor
      );

      if (existing) {
        existing.quantity++;
        existing.totalPrice += existing.price;
      } else {
        state.products.push({
          id:            newItem.id,
          name:          newItem.name,
          price:         newItem.price,
          quantity:      1,
          totalPrice:    newItem.price,
          image:         newItem.image,
          selectedColor: newItem.selectedColor,
        });
      }

      state.totalQuantity++;
      state.totalPrice += newItem.price;
    },

    removeFromCart(state, action) {
      const { id, selectedColor } = action.payload;
      const idx = state.products.findIndex(
        item => item.id === id && item.selectedColor === selectedColor
      );
      if (idx >= 0) {
        const line = state.products[idx];
        state.totalQuantity -= line.quantity;
        state.totalPrice  -= line.totalPrice;
        state.products.splice(idx, 1);
      }
    },

    increaseQuantity(state, action) {
      const { id, selectedColor } = action.payload;
      const idx = state.products.findIndex(
        item => item.id === id && item.selectedColor === selectedColor
      );
      if (idx >= 0) {
        const line = state.products[idx];
        line.quantity += 1;
        line.totalPrice += line.price;
        state.totalQuantity += 1;
        state.totalPrice    += line.price;
      }
    },

    decreaseQuantity(state, action) {
      const { id, selectedColor } = action.payload;
      const idx = state.products.findIndex(
        item => item.id === id && item.selectedColor === selectedColor
      );
      if (idx >= 0) {
        const line = state.products[idx];
        if (line.quantity > 1) {
          line.quantity -= 1;
          line.totalPrice -= line.price;
          state.totalQuantity -= 1;
          state.totalPrice    -= line.price;
        } else {
          state.totalQuantity -= 1;
          state.totalPrice    -= line.price;
          state.products.splice(idx, 1);
        }
      }
    },

    // NEW: resets cart back to its empty initial state
    clearCart(state) {
      state.products      = [];
      state.totalQuantity = 0;
      state.totalPrice    = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,    // don’t forget to export it
} = cartSlice.actions;

export default cartSlice.reducer;
