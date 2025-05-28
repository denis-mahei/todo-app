import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  selectLoading,
  selectTodos,
  selectCurrentTodo,
} from './redux/todos/todosSlice.js';
import { fetchTodos } from './redux/todos/operations.js';
import Text from './components/Text/Text.jsx';
import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Form from './components/Form/Form.jsx';
import EditForm from './components/EditForm/EditForm.jsx';
import TodoList from './components/TodoList/TodoList.jsx';
import Loader from './components/Loader/Loader.jsx';
import toast, { Toaster } from 'react-hot-toast';

export const App = () => {
  const currentTodo = useSelector(selectCurrentTodo);
  const dispatch = useDispatch();
  const loader = useSelector(selectLoading);
  const todos = useSelector(selectTodos);

  useEffect(() => {
    dispatch(fetchTodos())
      .unwrap()
      .then(res => toast.success(`Hello, You have ${res.length} todos`))
      .catch(e => toast.error(`Failed to fetch todos: ${e.message}`));
  }, [dispatch]);

  return (
    <>
      <Header />
      <Section>
        <Container>
          {loader && <Loader />}
          {currentTodo && <EditForm />}
          <Form />
          {todos.length > 0 ? (
            <TodoList />
          ) : (
            <Text textAlign="center">Create your first todo😉</Text>
          )}
          <Toaster />
        </Container>
      </Section>
    </>
  );
};
