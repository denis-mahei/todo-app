import { FiSearch } from 'react-icons/fi';

import style from './Form.module.css';

const Form = () => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const newTodo = form.elements.search.value;
    form.reset();
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </form>
  );
};

export default Form;
