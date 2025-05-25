import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useDebounce } from 'use-debounce';
import style from './Filter.module.css';

const Filter = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <input
      className={style.input}
      placeholder="Find it"
      name="filter"
      value={inputValue}
      onChange={e => setInputValue(e.target.value)}
    />
  );
};

export default Filter;
