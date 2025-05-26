import { useTodoStore } from '../../store/useTodoStore.js';
import Text from '../Text/Text.jsx';
import GridItem from '../GridItem/GridItem.jsx';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';

import style from './Todo.module.css';

const Todo = ({ id, index, text }) => {
  const delTodo = useTodoStore(state => state.deleteTodo);
  const setCurrentTodo = useTodoStore(state => state.setCurrentTodo);

  const handleDelete = () => {
    delTodo(id);
  };

  const handleEditTodo = () => {
    setCurrentTodo({
      id,
      text,
    });
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
