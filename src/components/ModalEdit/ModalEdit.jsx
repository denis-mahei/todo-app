import { createPortal } from 'react-dom';
import { IoMdCloseCircleOutline } from 'react-icons/io';

import css from './ModalEdit.module.css';

const ModalEdit = ({ children, onClose }) => {
  return createPortal(
    <div className={css.backdrop}>
      <div className={css.modal}>
        <button type="button" onClick={onClose} aria-label="Close modal">
          <IoMdCloseCircleOutline className={css.closeBtn} />
        </button>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root'),
  );
};
export default ModalEdit;
