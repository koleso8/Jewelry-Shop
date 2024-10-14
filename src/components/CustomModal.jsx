import { createPortal } from 'react-dom';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentItems } from '../redux/basket/selectors';
import { deleteCurrentB } from '../redux/basket/slice';
import OrderForm from './basket/OrderForm';
// import { selectCurrentItem } from '../redux/catalogItems/selectors';

const CustomModal = () => {
  const modalRoot = document.getElementById('modal-root');
  const current = !!useSelector(selectCurrentItems).length;
  const dispatch = useDispatch();

  return createPortal(
    <Modal
      isOpen={current}
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
        },
        content: {
          position: 'absolute',
          top: '20%',
          left: '20%',
          right: '20%',
          bottom: '20%',
          border: '1px solid #ccc',
          background: '#fff',
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          borderRadius: '4px',
          outline: 'none',
          padding: '20px',
        },
      }}
      className=" flex justify-center items-center"
      ariaHideApp={false}
    >
      <>
        <div className="">
          <button
            className="absolute right-4 top-4"
            onClick={() => dispatch(deleteCurrentB())}
          >
            X
          </button>
          <p>modal</p>
          <OrderForm />
        </div>
      </>
    </Modal>,
    modalRoot
  );
};

export default CustomModal;
