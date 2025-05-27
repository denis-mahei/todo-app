import { createSlice } from '@reduxjs/toolkit';
import { addTodo, deleteTodo, editTodo, fetchTodos } from './operations.js';

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    currentTodo: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    setCurrentTodo: (state, action) => {
      state.currentTodo = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTodos.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addTodo.pending, state => {
        state.isLoading = true;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addTodo.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteTodo.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter(todo => todo.id !== action.payload.id);
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(editTodo.pending, state => {
        state.isLoading = true;
      })
      .addCase(editTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      });
  },
});

export const selectTodos = state => state.todos.items;

export const selectLoading = state => state.todos.isLoading;

export const selectError = state => state.todos.error;

export const selectCurrentTodo = state => state.todos.currentTodo;

export const { setCurrentTodo } = todosSlice.actions;

export const todosReducer = todosSlice.reducer;
