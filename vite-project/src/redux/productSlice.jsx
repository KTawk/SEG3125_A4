import {createSlice} from "@reduxjs/toolkit";
import { mockData } from "../assets/mockData";

// productSlice.js
const initialState = {
  products: mockData,   // preload here
  /* … */
};


const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers : {
        setProducts(state, action) {
            state.products = action.payload
        }
    },
})

export const {setProducts} = productSlice.actions;
export default productSlice.reducer;