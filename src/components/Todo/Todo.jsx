import { deleteTodo, editTodo } from '../../redux/todos/operations.js';
import { setCurrentTodo } from '../../redux/todos/todosSlice.js';
import { useDispatch } from 'react-redux';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import GridItem from '../GridItem/GridItem.jsx';
import Text from '../Text/Text.jsx';
import { formatDistanceToNow } from 'date-fns';

import style from './Todo.module.css';

const Todo = ({ id, text, createdAt, completed }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  const handleEditTodo = () => {
    dispatch(
      setCurrentTodo({
        id,
        text,
      }),
    );
  };
  const handleToggle = () => {
    dispatch(
      editTodo({
        todoId: id,
        updatedTodo: { completed: !completed },
      }),
    );
  };

  return (
    <GridItem>
      <div className={style.box}>
        <label className={style.checkboxLabel}>
          <input
            type="checkbox"
            checked={completed}
            onChange={handleToggle}
            className={style.checkbox}
          />
          Done
        </label>
        <Text textAlign="center" marginBottom="20">
          TODO # {id}
        </Text>

        <Text>{text}</Text>
        <p className={style.date}>
          {formatDistanceToNow(createdAt, { addSuffix: true })}
        </p>
        <button
          className={style.deleteButton}
          type="button"
          onClick={handleDelete}
        >
          <RiDeleteBinLine size={24} />
        </button>
        <button
          className={style.editButton}
          type="button"
          onClick={handleEditTodo}
        >
          <RiEdit2Line size={24} />
        </button>
      </div>
    </GridItem>
  );
};

export default Todo;
