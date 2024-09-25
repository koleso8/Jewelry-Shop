import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { toastStyles } from '../../helpers/toastStyles';

const initialState = {
  items: [],
  allPrice: 0,
};

const slice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items.push(action.payload);
      toast.success('Додано до кошика', toastStyles);
    },
    deleteFromBasket: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
      toast.error('Видалено з кошика', toastStyles);
    },
    plusCount: (state, action) => {
      state.items.map(item =>
        item.id === action.payload ? (item.count += 1) : item
      );
    },
    minusCount: (state, action) => {
      state.items.map(item =>
        item.id === action.payload
          ? item.count === 0
            ? 0
            : (item.count -= 1)
          : item
      );
    },
    setAllPrice: state => {
      state.allPrice = state.items.reduce(
        (acc, item) => acc + item.price * item.count,
        0
      );
    },
  },
});
//
export const basketReducer = slice.reducer;
export const {
  addToBasket,
  deleteFromBasket,
  setAllPrice,
  plusCount,
  minusCount,
} = slice.actions;
