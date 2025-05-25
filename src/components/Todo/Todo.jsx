import Text from '../Text/Text.jsx';
import GridItem from '../GridItem/GridItem.jsx';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import style from './Todo.module.css';
import { useTodoStore } from '../../store/useTodoStore.js';

const Todo = ({ id, index, text }) => {
  const delTodo = useTodoStore(state => state.deleteTodo);

  const handleDelete = () => {
    delTodo(id);
  };

  return (
    <GridItem>
      <div className={style.box}>
        <Text textAlign="center" marginBottom="20">
          TODO # {index + 1}
        </Text>

        <Text>{text}</Text>
        <button
          className={style.deleteButton}
          type="button"
          onClick={handleDelete}
        >
          <RiDeleteBinLine size={24} />
        </button>
        <button className={style.editButton} type="button">
          <RiEdit2Line size={24} />
        </button>
      </div>
    </GridItem>
  );
};

export default Todo;
