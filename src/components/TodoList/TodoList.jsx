import Todo from '../Todo/Todo.jsx';
import Grid from '../Grid/Grid.jsx';

const TodoList = ({ todos }) => {
  return (
    <Grid>
      {todos.map((todo, index) => (
        <Todo key={todo.id} {...todo} index={index} />
      ))}
    </Grid>
  );
};

export default TodoList;
