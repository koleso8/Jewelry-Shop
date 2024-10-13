import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { toastStyles } from '../../helpers/toastStyles';
import { sendMessaageToTGThunk } from './operation';

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
  extraReducers: builder => {
    builder
      .addCase(sendMessaageToTGThunk.pending, (state, action) => {
        console.log(`pending action : ${action}`);
      })
      .addCase(sendMessaageToTGThunk.fulfilled, (state, action) => {
        console.log(`fullfield action : ${action}`);
      })
      .addCase(sendMessaageToTGThunk.rejected, (state, action) => {
        console.log(`rejected action : ${action}`);
      });
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
