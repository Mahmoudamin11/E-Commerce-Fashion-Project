import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "./slices/productsSlice";
import categoriesSlice from "./slices/categoriesSlice";
import subcategoriesSlice from "./slices/subcategoriesForEachCategory";
export const store = configureStore({
  reducer: {
    products: ProductsReducer,
    categories: categoriesSlice,
    subcategories: subcategoriesSlice,
  },
});
