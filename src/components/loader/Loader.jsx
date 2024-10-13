import s from './Loader.module.css';

const Loader = () => {
  return <div className={`${s.spinnerS} w-full h-full backdrop-blur-sm`}></div>;
};

export default Loader;
