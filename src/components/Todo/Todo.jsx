import { Text } from 'components';
import GridItem from '../GridItem/GridItem.jsx';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import style from './Todo.module.css';
import { useDispatch } from 'react-redux';

const Todo = ({ id, counter, text }) => {
  const dispatch = useDispatch();
  console.log(dispatch);
  return (
    <GridItem>
      <div className={style.box}>
        <Text textAlign="center" marginBottom="20">
          TODO # 1
        </Text>

        <Text>Text todo 1</Text>
        <button className={style.deleteButton} type="button">
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
