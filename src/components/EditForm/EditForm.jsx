import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';

import style from './EditForm.module.css';
import { useTodoStore } from '../../store/useTodoStore.js';

const EditForm = () => {
  const { setCurrentTodo, editTodo, currentTodo } = useTodoStore(state => ({
    currentTodo: state.currentTodo,
    editTodo: state.editTodo,
    setCurrentTodo: state.setCurrentTodo,
  }));

  if (!currentTodo) return null;

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const newText = form.elements.text.value;
    if (!newText) return;

    editTodo(currentTodo.id, { text: newText });
    setCurrentTodo(null);

    form.reset();
  };

  const handleCancel = () => {
    setCurrentTodo(null);
  };

  return (
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

      <button className={style.editButton} type="button" onClick={handleCancel}>
        <MdOutlineCancel color="red" size="16px" />
      </button>
    </form>
  );
};
export default EditForm;
