import { SyncLoader } from 'react-spinners';
import style from './Loader.module.css';

const Loader = () => {
  return <SyncLoader color="#98dff9" className={style.loader} />;
};
export default Loader;
