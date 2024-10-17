import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { toastStyles } from '../../helpers/toastStyles';
import { sendMessaageToTGThunk } from './operation';

const initialState = {
  items: [],
  allPrice: 0,
  currentItems: [],
  loadingBasket: false,
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
          ? item.count === 1
            ? 1
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
    addToCurrentB: (state, { payload }) => {
      state.currentItems = [...payload];
      document.body.style.overflow = 'hidden';
    },
    deleteCurrentB: state => {
      document.body.style.overflow = 'unset';
      state.currentItems = [];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(sendMessaageToTGThunk.pending, (state, action) => {
        state.loadingBasket = true;
        console.log(action);
      })
      .addCase(sendMessaageToTGThunk.fulfilled, (state, action) => {
        state.loadingBasket = false;
        console.log(action);
      })
      .addCase(sendMessaageToTGThunk.rejected, (state, action) => {
        state.loadingBasket = false;
        console.log(action);
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
  addToCurrentB,
  deleteCurrentB,
} = slice.actions;
