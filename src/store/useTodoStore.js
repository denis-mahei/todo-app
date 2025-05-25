import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { nanoid } from 'nanoid';

export const useTodoStore = create(
  persist(
    set => ({
      todos: [],
      addTodo: newTodo =>
        set(state => ({
          todos: [
            ...state.todos,
            {
              id: nanoid(),
              text: newTodo,
            },
          ],
        })),
      deleteTodo: todoId =>
        set(state => ({
          todos: state.todos.filter(todo => todoId !== todo.id),
        })),
      editTodo: (todoId, updatedTodo) =>
        set(state => ({
          todos: state.todos.map(todo =>
            todo.id === todoId ? { ...todo, ...updatedTodo } : todo,
          ),
        })),
      currentTodo: null,
    }),
    {
      name: 'todos-store',
    },
  ),
);
