import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IWord } from 'model/IWord';
import { fetchWordsByGroup } from 'redux/thunks';
import { updateLocalStatistic } from 'shared/utils';
import { AUDIOCHALLENGE } from 'shared/utils/constants';
import { IChallengeState } from './types';
import { getAnswers } from './utils';

export const NUM_OF_ANSWER_OPTIONS = 5;
export const NUM_OF_QUESTIONS = 3;

const initialState: IChallengeState = {
  challengeLevel: '',
  currentQuestionsSet: [],
  currentQuestionIndex: 0,
  answers: [],
  currentAnswer: '',
  rightAnswers: [],
  wrongAnswers: [],
  showResult: false,
  isChallengeStarted: false,
  isFetchingWords: false,
  fetchWordsError: null,
  results: [],
  currentRightStreak: 3,
};

const challengeSlice = createSlice({
  name: 'challenge',
  initialState,
  reducers: {
    startChallenge(state, action: PayloadAction<string>) {
      state.challengeLevel = action.payload;
    },
    selectAnswer(state, action: PayloadAction<string>) {
      if (
        action.payload ===
        state.currentQuestionsSet[state.currentQuestionIndex].wordTranslate
      ) {
        state.rightAnswers.push(
          state.currentQuestionsSet[state.currentQuestionIndex].id
        );
        state.currentRightStreak++;
      } else {
        state.wrongAnswers.push(
          state.currentQuestionsSet[state.currentQuestionIndex].id
        );
        state.currentRightStreak = 0;
      }
      state.currentAnswer = action.payload;
    },
    submitAnswer(state) {
      if (state.currentQuestionIndex < state.currentQuestionsSet.length - 1) {
        state.currentAnswer = '';
        state.currentQuestionIndex++;
        state.answers = getAnswers(
          state.currentQuestionsSet,
          state.currentQuestionIndex
        );
      } else {
        state.currentAnswer = '';
        state.showResult = true;
      }
    },
    saveDailyResults(state, action: PayloadAction<string | undefined>) {
      updateLocalStatistic(
        state.rightAnswers,
        state.wrongAnswers,
        AUDIOCHALLENGE,
        state.currentRightStreak,
        action.payload
      );
    },
    setInitialChallengeState(state) {
      return (state = { ...initialState });
    },
  },
  extraReducers: {
    [fetchWordsByGroup.pending.type]: (state) => {
      state.isFetchingWords = true;
    },
    [fetchWordsByGroup.fulfilled.type]: (
      state,
      action: PayloadAction<IWord[]>
    ) => {
      state.isFetchingWords = false;
      state.fetchWordsError = null;
      const allLevelWords = [...action.payload];
      state.currentQuestionsSet = allLevelWords.slice(0, 10);
      state.answers = getAnswers(
        state.currentQuestionsSet,
        state.currentQuestionIndex
      );
      state.isChallengeStarted = true;
    },
    [fetchWordsByGroup.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.fetchWordsError = action.payload;
      console.error(action.payload);
    },
  },
});

export const {
  startChallenge,
  selectAnswer,
  submitAnswer,
  saveDailyResults,
  setInitialChallengeState,
} = challengeSlice.actions;

export default challengeSlice.reducer;
