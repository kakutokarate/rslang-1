import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IUser } from 'model/IUser';
import { ISignIn } from './types';

const BASE_URL = 'https://zoukman-rslang.herokuapp.com';

export const createUser = createAsyncThunk(
  'thunks/createUser',
  async ({ name, email, password }: IUser, thunkAPI) => {
    try {
      const response = await axios.post(BASE_URL + '/users', {
        name,
        email,
        password,
      });

      return response.data;
    } catch (e) {
      if (e instanceof Error) console.error(e.message);
      return thunkAPI.rejectWithValue(
        'Не удалось создать пользователя! Попробуйте еще раз.'
      );
    }
  }
);

export const signIn = createAsyncThunk(
  'thunks/signIn',
  async ({ email, password }: ISignIn, thunkAPI) => {
    try {
      const response = await axios.post(BASE_URL + '/signin', {
        email,
        password,
      });

      return response.data;
    } catch (e) {
      if (e instanceof Error) console.error(e.message);
      return thunkAPI.rejectWithValue(
        'Не удалось войти в учётную запись! Попробуйте еще раз.'
      );
    }
  }
);
