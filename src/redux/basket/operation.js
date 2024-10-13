import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import * as TG from '../../helpers/api';

export const sendMessaageToTGThunk = createAsyncThunk(
  'basket/sendTG',
  async (payload, thunkAPI) => {
    const text = `замовлення: ${payload}`;
    try {
      const { data } = await axios.post(TG.API, {
        chat_id: TG.TG_CHAT_ID,
        text,
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
