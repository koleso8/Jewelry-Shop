import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { toastStyles } from '../../helpers/toastStyles';

const initialState = {
  items: [],
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
  },
});

export const basketReducer = slice.reducer;
export const { addToBasket, deleteFromBasket } = slice.actions;
