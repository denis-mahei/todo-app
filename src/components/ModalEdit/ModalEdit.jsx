import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { setCurrentTodo } from '../../redux/todos/todosSlice.js';

import { IoMdCloseCircleOutline } from 'react-icons/io';
import css from './ModalEdit.module.css';

const ModalEdit = ({ children }) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setCurrentTodo(null));
  };

  return createPortal(
    <div className={css.backdrop}>
      <div className={css.modal}>
        <button type="button" onClick={handleClose} aria-label="Close modal">
          <IoMdCloseCircleOutline className={css.closeBtn} />
        </button>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root'),
  );
};
export default ModalEdit;
