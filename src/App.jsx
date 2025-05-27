import Text from './components/Text/Text.jsx';
import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Form from './components/Form/Form.jsx';
import EditForm from './components/EditForm/EditForm.jsx';
import TodoList from './components/TodoList/TodoList.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchTodos } from './redux/todos/operations.js';
import { selectLoading, selectTodos } from './redux/todos/todosSlice.js';
import Loader from './components/Loader/Loader.jsx';

export const App = () => {
  const dispatch = useDispatch();
  const loader = useSelector(selectLoading);
  const todos = useSelector(selectTodos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Section>
        <Container>
          {loader && <Loader />}
          {todos.length > 0 ? (
            <TodoList />
          ) : (
            <Text textAlign="center">Create your first todo😉</Text>
          )}
        </Container>
      </Section>
    </>
  );
};
