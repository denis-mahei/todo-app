import { useDispatch } from 'react-redux';
import { deleteTodo, setCurrentTodo } from '../../redux/todoSlice.js';
import Text from '../Text/Text.jsx';
import GridItem from '../GridItem/GridItem.jsx';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import style from './Todo.module.css';

const Todo = ({ id, counter, text }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  const handleEditTodo = () => {
    const todo = {
      id,
      counter,
      text,
    };
    dispatch(setCurrentTodo(todo));
  };

  return (
    <GridItem>
      <div className={style.box}>
        <Text textAlign="center" marginBottom="20">
          TODO # {counter + 1}
        </Text>

        <Text>{text}</Text>
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
