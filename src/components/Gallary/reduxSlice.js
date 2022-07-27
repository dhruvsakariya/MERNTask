import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { uploadImages } from "./reduxAPI";

const initialState = {
  loading: false,
  images: ["alligator"],
};

export const uploadImageAsync = createAsyncThunk(
  "gallary/addImages",
  async ({ images }, { dispatch, rejectWithValue }) => {
    try {
      const response = await uploadImages(images);

      return response.data.images;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const gallarySlice = createSlice({
  name: "gallary",
  initialState,

  reducers: {
    fileSelectedHandler: (state, action) => {
      state.images = action.payload.files;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(uploadImageAsync.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(uploadImageAsync.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload);
        state.images = [...state.images, ...action.payload];
      })
      .addCase(uploadImageAsync.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export const { fileSelectedHandler } = gallarySlice.actions;

export const gallaryState = (state) => state.gallary;

export default gallarySlice.reducer;
