import Todo from '../Todo/Todo.jsx';
import Grid from '../Grid/Grid.jsx';
import { useSelector } from 'react-redux';
import { selectTodos } from '../../redux/todos/todosSlice.js';

const TodoList = ({ modal }) => {
  const todos = useSelector(selectTodos);
  console.log(todos);
  return (
    <Grid>
      {todos.map(todo => (
        <Todo key={todo.id} {...todo} openModal={modal} />
      ))}
    </Grid>
  );
};

export default TodoList;
