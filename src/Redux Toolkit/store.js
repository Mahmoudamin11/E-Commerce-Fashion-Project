import { configureStore } from "@reduxjs/toolkit";
import bankReducer from "./slices/bankSlice";
import ProductsReducer from "./slices/productsSlice";
import whishListSlice from "./slices/Wishlist";
export const store = configureStore({
  reducer: {
    products: ProductsReducer,
    whishListSlice
  },
});
