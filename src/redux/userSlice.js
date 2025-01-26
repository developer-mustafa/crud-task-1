// userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiSlice } from './apiSlice'; // Import apiSlice

// Async thunk for creating a user
export const createUser = createAsyncThunk(
  'user/createUser',
  async (userData, { dispatch }) => {
    const { data } = await dispatch(apiSlice.endpoints.createUser.initiate(userData));
    return data;
  }
);

// Async thunk for updating a user
export const updateUser = createAsyncThunk(
  'user/updateUser',
  async ({ id, userData }, { dispatch }) => {
    const { data } = await dispatch(
      apiSlice.endpoints.updateUser.initiate({ id, userData })
    );
    return data;
  }
);

// User slice for managing users and handling API requests
const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Handling createUser thunk actions
    builder
      .addCase(createUser.fulfilled, (state, action) => {
        state.users.push(action.payload); // Add the new user to the users list
      })
      .addCase(createUser.rejected, (state, action) => {
        state.error = action.error.message; // Capture error if the API call fails
      })
      // Handling updateUser thunk actions
      .addCase(updateUser.fulfilled, (state, action) => {
        const index = state.users.findIndex((user) => user._id === action.payload._id);
        if (index !== -1) state.users[index] = action.payload; // Update the user in the list
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.error = action.error.message; // Capture error if the API call fails
      });
  },
});

export default userSlice.reducer;
