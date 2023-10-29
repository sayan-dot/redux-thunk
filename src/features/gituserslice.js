import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://api.github.com/users";

export const fetchUsers = createAsyncThunk("fetchUsers", async () => {
  try {
    const responce = await axios.get(baseUrl);
    return responce.data;
  } catch (error) {
    console.log(error.message);
  }
});

export const gitUser = createSlice({
  name: "gitUser",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [fetchUsers.pending]: (state) => {
      state.loading = true;
    },
    [fetchUsers.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.users = payload;
    },
    [fetchUsers.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default gitUser.reducer