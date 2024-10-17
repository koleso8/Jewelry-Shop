import { createPortal } from 'react-dom';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentItems } from '../redux/basket/selectors';
import { deleteCurrentB } from '../redux/basket/slice';
import OrderForm from './basket/OrderForm';
import { IoMdClose } from 'react-icons/io';
// import { selectCurrentItem } from '../redux/catalogItems/selectors';

const CustomModal = () => {
  const current = !!useSelector(selectCurrentItems).length;
  const dispatch = useDispatch();
  return (
    <Modal
      isOpen={current}
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        content: {
          position: 'absolute',
          top: '20%',
          left: '20%',
          right: '20%',
          bottom: '20%',
          borderRadius: '16px',
          background: '#fff',
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          outline: 'none',
          padding: '20px',
        },
      }}
      className=" flex justify-center items-center"
      ariaHideApp={false}
      onRequestClose={() => dispatch(deleteCurrentB())}
    >
      <>
        <div className="">
          <button
            className="absolute right-4 top-4"
            onClick={() => dispatch(deleteCurrentB())}
          >
            <IoMdClose size="26px" />
          </button>
          <OrderForm onClose={() => dispatch(deleteCurrentB())} />
        </div>
      </>
    </Modal>
  );
};

export default CustomModal;
