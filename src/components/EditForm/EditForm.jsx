import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';
import ModalEdit from '../ModalEdit/ModalEdit.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { editTodo } from '../../redux/todos/operations.js';
import {
  selectCurrentTodo,
  setCurrentTodo,
} from '../../redux/todos/todosSlice.js';
import { useState } from 'react';

import style from './EditForm.module.css';

const EditForm = () => {
  const dispatch = useDispatch();

  const currentTodo = useSelector(selectCurrentTodo);
  const [text, setText] = useState(currentTodo.text || '');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      editTodo({
        todoId: currentTodo.id,
        updatedTodo: { text },
      }),
    )
      .unwrap()
      .then(() => {
        dispatch(setCurrentTodo(null));
      });
    // dispatch(setCurrentTodo(null));
  };
  return (
    <ModalEdit>
      <form className={style.form} onSubmit={handleSubmit}>
        <input
          className={style.input}
          placeholder="What do you want to write?"
          name="text"
          required
          value={text}
          onChange={event => setText(event.target.value)}
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
