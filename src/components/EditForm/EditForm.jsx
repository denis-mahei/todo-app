import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';

import style from './EditForm.module.css';
import ModalEdit from '../ModalEdit/ModalEdit.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { editTodo } from '../../redux/todos/operations.js';
import {
  selectCurrentTodo,
  setCurrentTodo,
} from '../../redux/todos/todosSlice.js';

const EditForm = () => {
  const dispatch = useDispatch();

  const currentTodo = useSelector(selectCurrentTodo);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const newTodo = form.elements.text.value;
    console.log(newTodo);
    dispatch(
      editTodo({
        todoId: currentTodo.id,
        updatedTodo: {
          text: newTodo,
        },
      }),
    ).then(() => {
      console.log('Edit dispatched:', newTodo);
      dispatch(setCurrentTodo(null));
    });
  };
  return (
    <ModalEdit>
      <form className={style.form} onSubmit={handleSubmit}>
        <input
          className={style.input}
          placeholder="What do you want to write?"
          name="text"
          required
          defaultValue={currentTodo.text}
          autoFocus
        />
        <button className={style.submitButton} type="submit">
          <RiSaveLine color="green" size="16px" />
        </button>

        <button className={style.editButton} type="button">
          <MdOutlineCancel color="red" size="16px" />
        </button>
      </form>
    </ModalEdit>
  );
};
export default EditForm;
