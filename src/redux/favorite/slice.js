import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { toastStyles } from '../../helpers/toastStyles';

const initialState = {
  favorites: [],
};

const slice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addToFavorite: (state, action) => {
      state.favorites.push(action.payload);
      toast.success('Додано в улюблене', toastStyles);
    },
    deleteFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        item => item.id !== action.payload.id
      );
      toast.error('Видалено з улюбленого', toastStyles);
    },
  },
});

export const favoriteReducer = slice.reducer;
export const { addToFavorite, deleteFavorite } = slice.actions;
