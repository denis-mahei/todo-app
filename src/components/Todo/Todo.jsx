import Text from '../Text/Text.jsx';
import GridItem from '../GridItem/GridItem.jsx';
// import { Tempo } from '@formkit/tempo';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';

import style from './Todo.module.css';

const Todo = ({ id, text, createdAt }) => {
  const handleDelete = () => {};

  const handleEditTodo = () => {};
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
