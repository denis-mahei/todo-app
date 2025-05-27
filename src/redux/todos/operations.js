import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6834d8ffcd78db2058bf86d7.mockapi.io';

export const fetchTodos = createAsyncThunk(
  'todos/fetchAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/todos');
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const addTodo = createAsyncThunk('todos/addTodo', async newTodo => {
  const res = await axios.post('/todos', newTodo);
  return res.data;
});

export const deleteTodo = createAsyncThunk(
  'todos/deleteTodo',
  async (todoId, thunkApi) => {
    try {
      const res = await axios.delete(`/todos/${todoId}`);
      return res.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  },
);

export const editTodo = createAsyncThunk(
  'todos/editTodo',
  async ({ todoId, updatedTodo }) => {
    const res = await axios.patch(`/todos/${todoId}`, updatedTodo);
    return res.data;
  },
);
