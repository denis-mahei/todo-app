import { create } from 'zustand';

const useTodoStore = create(set => ({
  todos: [],
  addTodo: newTodo => set(state => ({ todos: [...state.todos, newTodo] })),
  deleteTodo: todoId =>
    set(state => ({ todos: state.todos.filter(todo => todoId !== todo.id) })),
  editTodo: (todoId, updatedTodo) =>
    set(state => ({
      todos: state.todos.map(todo =>
        todo.id === todoId ? { ...todo, ...updatedTodo } : todo,
      ),
    })),
}));
