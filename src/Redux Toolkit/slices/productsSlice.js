import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "productsSlice/fetchProducts",
  async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
  }
);

export const ProductsSlice = createSlice({
  name: "prouductsSlice",
  initialState: [],
  reducers: {
    addProduct: (state, action) => {
      state.unshift(action.payload);

    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      console.log("action", action);
      return action.payload;
    });
  },
});

export const { addProduct } = ProductsSlice.actions;
export default ProductsSlice.reducer;
