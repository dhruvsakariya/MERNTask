import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { logoutUser } from "./reduxAPI";
import { pushErrorNotification } from "../../Error/reduxSlice";
import { setUserAvl } from "../../User/reduxSlice";


// icon
import { Icon } from "@iconify/react";

const initialState = {
  loading: false,
};

export const logoutUserAsync = createAsyncThunk(
  "logout/logoutUser",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      await logoutUser();
      dispatch(setUserAvl({ userAvl: false }));
  
    } catch (error) {
      if (error.name === "FirebaseError") {
        dispatch(
          pushErrorNotification({
            notify: {
              iconifyIconLink: (
                <Icon icon="bx:notification" className="rounded" />
              ),
              errorTitle: error.code,
              errorMessage: error.message,
              theme: "danger",
              time: "now",
              autoHideTime: 3000,
              statusCode: 200,
              show: true,
            },
          })
        );
      }
      return rejectWithValue(error);
    }
  }
);

export const logoutSlice = createSlice({
  name: "logout",
  initialState,

  // reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(logoutUserAsync.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(logoutUserAsync.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(logoutUserAsync.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

// export const {  } = logoutSlice.actions;

export const logoutState = (state) => state.logout;

export default logoutSlice.reducer;
