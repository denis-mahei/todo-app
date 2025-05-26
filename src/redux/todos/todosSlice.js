import { createSlice } from '@reduxjs/toolkit';
import { fetchTodos } from './operations.js';

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTodos.pending, (state, action) => {})
      .addCase(fetchTodos.fulfilled, (state, action) => {});
  },
});
