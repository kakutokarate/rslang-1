import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IStatistic } from 'model/IStatistic';
import { getStatistic } from 'redux/thunks';
import { IStatisticState } from './types';

const initialState: IStatisticState = {
  learnedWordsCount: 0,
  learnedWordsIds: {},
  dailyResults: {},
  isLoadingStatistic: false,
  statisticLoaded: false,
  statisticError: null,
};

const statisticSlice = createSlice({
  name: 'statistic',
  initialState,
  reducers: {},
  extraReducers: {
    [getStatistic.pending.type]: (state) => {
      state.isLoadingStatistic = true;
      state.statisticLoaded = false;
    },
    [getStatistic.fulfilled.type]: (
      state,
      action: PayloadAction<IStatistic>
    ) => {
      state.isLoadingStatistic = false;
      state.statisticError = null;
      state.statisticLoaded = true;
      state.learnedWordsCount = action.payload.learnedWords;
      state.learnedWordsIds = action.payload.optional.learnedWordsIds;
      state.dailyResults = action.payload.optional.dailyResults;
    },
    [getStatistic.rejected.type]: (state, action: PayloadAction<string>) => {
      state.statisticError = action.payload;
      console.error(action.payload);
    },
  },
});

export default statisticSlice.reducer;
