import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';

import style from './EditForm.module.css';
import ModalEdit from '../ModalEdit/ModalEdit.jsx';
import { useDispatch } from 'react-redux';

const EditForm = () => {
  return (
    <ModalEdit>
      <form className={style.form}>
        <input
          className={style.input}
          placeholder="What do you want to write?"
          name="text"
          required
          defaultValue={''}
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
