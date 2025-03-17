import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from '../../axios/apiClient'

export const fetchProducts = createAsyncThunk("search/fetchProducts", async () => {
  const response = await apiClient.get("/");
  return response.data;
});

const searchSlice = createSlice({
  name: "search",
  initialState: {
    products: [],
    searchTerm: "",
    status: "idle",
    error: null,
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setSearchTerm } = searchSlice.actions;
export default searchSlice.reducer;
