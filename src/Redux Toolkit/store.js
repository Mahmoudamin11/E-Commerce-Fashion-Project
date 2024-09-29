import { configureStore } from "@reduxjs/toolkit";
import bankReducer from "./slices/bankSlice";
import ProductsReducer from "./slices/productsSlice";
export const store = configureStore({
  reducer: {
    products: ProductsReducer,
  },
});
