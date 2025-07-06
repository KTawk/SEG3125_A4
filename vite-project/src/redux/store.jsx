import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import { loadCartState, saveCartState } from '../utils/localStorage'
import productReducer from './productSlice' // assuming you have a productSlice

const preloadedCart = loadCartState()

const store = configureStore({
  reducer: {
    product: productReducer, // assuming you have a productReducer
    cart: cartReducer,
    // …other slices
  },
  preloadedState: {
    cart: preloadedCart || undefined
  }
})

// persist on every change
store.subscribe(() => {
  saveCartState(store.getState().cart)
})

export default store
