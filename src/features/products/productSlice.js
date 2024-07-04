import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk('product/fetchProducts', async () => {
  const response = await fetchProductsList();
  return response.data;
})

export const fetchProductsById = createAsyncThunk('product/fetchProductsById', async (id) => {
  const response = await fetchProductsListById(id);
  return response.data;
})

const fetchProductsList = () => axios.get('https://fakestoreapi.com/products');
const fetchProductsListById = (id) => axios.get(`https://fakestoreapi.com/products/${id}`);

const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    loading: false,
    error: null
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action?.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action?.error?.message;
      })
      .addCase(fetchProductsById.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchProductsById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedItem = action?.payload;
      })
      .addCase(fetchProductsById.rejected, (state, action) => {
        state.loading = false;
        state.error = action?.error?.message;
      })
  }
})

export default productSlice.reducer