import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IWord } from 'model/IWord';
import { fetchWordsByGroup } from 'redux/thunks';
import { IChallengeState } from './types';
import { getAnswers } from './utils';

export const NUM_OF_ANSWER_OPTIONS = 5;
export const NUM_OF_QUESTIONS = 10;

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
};

const challengeSlice = createSlice({
  name: 'challenge',
  initialState,
  reducers: {
    startChallenge(state, action: PayloadAction<string>) {
      state.challengeLevel = action.payload;
    },
    selectAnswer(state, action: PayloadAction<string>) {
      action.payload ===
      state.currentQuestionsSet[state.currentQuestionIndex].wordTranslate
        ? state.rightAnswers.push(
            state.currentQuestionsSet[state.currentQuestionIndex].id
          )
        : state.wrongAnswers.push(
            state.currentQuestionsSet[state.currentQuestionIndex].id
          );
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
      state.currentQuestionsSet = action.payload;
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
      console.log(action.payload);
    },
  },
});

export const { startChallenge, selectAnswer, submitAnswer } =
  challengeSlice.actions;

export default challengeSlice.reducer;
