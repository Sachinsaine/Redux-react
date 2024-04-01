
// store.js
import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "./slices/cartSlice"; // Import your cart reducer
import cartReducer from "../store/slices/cartSlice.js";
const store = configureStore({
  reducer: {
    cart: cartReducer, // Add the cart reducer under the 'cart' key
    // Add other reducers if any
  },
});

export default store;
