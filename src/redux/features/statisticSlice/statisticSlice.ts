import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IStatisticState } from './types';

const initialState: IStatisticState = {
  learnedWordsCount: 0,
  learnedWords: [],
  dailyResults: [],
};

const statisticSlice = createSlice({
  name: 'statistic',
  initialState,
  reducers: {},
  extraReducers: {},
});

export default statisticSlice.reducer;
