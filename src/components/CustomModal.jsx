import { createPortal } from 'react-dom';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCurrent } from '../redux/catalogItems/slice';
import { selectCurrentItem } from '../redux/catalogItems/selectors';

const CustomModal = () => {
  const modalRoot = document.getElementById('modal-root');
  const current = useSelector(selectCurrentItem);
  const dispatch = useDispatch();
  console.log(!current);

  return createPortal(
    <Modal
      isOpen={!current}
      overlayClassName="bg-black opacity-5"
      className=" flex justify-center items-center"
      ariaHideApp={false}
    >
      <button onClick={() => dispatch(deleteCurrent())}>X</button>

      <p>med</p>
    </Modal>,
    modalRoot
  );
};

export default CustomModal;
