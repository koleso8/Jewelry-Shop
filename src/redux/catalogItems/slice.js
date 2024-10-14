import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
};

const slice = createSlice({
  name: 'catalogItems',
  initialState,
  reducers: {
    addToCurrent: (state, action) => {
      state.currentItem = action.payload;
    },
    deleteCurrent: state => {
      state.currentItem = null;
    },
  },
});

export const catalogItemsReducer = slice.reducer;
export const { addToCurrent, deleteCurrent } = slice.actions;
