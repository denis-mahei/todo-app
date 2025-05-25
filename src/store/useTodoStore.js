import { create } from 'zustand';

const useTodoStore = create(set => ({
  todos: [],
  addTodo: newTodo => set(state => ({ todos: [...state.todos, newTodo] })),
  deleteTodo: todoId =>
    set(state => ({ todos: state.todos.filter(todo => todoId !== todo.id) })),
}));
