import { useDispatch, useSelector } from 'react-redux';
import {
  selectAllPrice,
  selectBacketItems,
  selectCurrentItems,
} from '../../redux/basket/selectors';
import { sendMessaageToTGThunk } from '../../redux/basket/operation';
import { Field, Form, Formik } from 'formik';

const OrderForm = ({ onClose }) => {
  const dispatch = useDispatch();

  const items = useSelector(selectCurrentItems).map(
    item => `\n${item.title} - ${item.count}шт.(${item.count * item.price} грн)`
  );
  const allPrice = useSelector(selectAllPrice);

  const handleSubmit = (values, action) => {
    const res = `Одержувач: ${values.userName},\n
      Номер телефону: ${values.phoneNumber},\n
      Адреса доставки: ${values.city} НП: #${values.NP},\n
      прикраси: ${items} \n
      Загальна вартість : ${allPrice} грн`;

    dispatch(sendMessaageToTGThunk(res));
    action.resetForm();
    onClose();
  };

  const initialValues = {
    userName: '',
    phoneNumber: '',
    city: '',
    NP: 0,
  };

  return (
    <Formik onSubmit={handleSubmit} initialValues={initialValues}>
      <Form className="flex flex-col gap-8">
        <Field name="userName" placeholder="введіть ім`я" required />
        <Field name="phoneNumber" placeholder="номер телефону" required />
        <Field as="select" name="city" placeholder="оберіть місто" required>
          <option value="Київ">Київ</option>
          <option value="Миколаїв">Миколаїв</option>
        </Field>
        <Field
          type="number"
          name="NP"
          placeholder="відділеня нової пошти"
          required
        />
        <button
          type="submit"
          className="bg-blue-700 text-white  h-12 rounded-3xl px-5  "
        >
          ЗАМОВИТИ
        </button>
      </Form>
    </Formik>
  );
};

export default OrderForm;
