import { deleteTodo } from '../../redux/todos/operations.js';
import { setCurrentTodo } from '../../redux/todos/todosSlice.js';
import { useDispatch } from 'react-redux';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import GridItem from '../GridItem/GridItem.jsx';
import Text from '../Text/Text.jsx';
import style from './Todo.module.css';

const Todo = ({ id, text, createdAt }) => {
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

  return (
    <GridItem>
      <div className={style.box}>
        <Text textAlign="center" marginBottom="20">
          TODO # {id}
        </Text>

        <Text>{text}</Text>
        <Text>{createdAt}</Text>
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
