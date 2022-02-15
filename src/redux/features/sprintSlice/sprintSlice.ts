import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IWord } from "model/IWord";
import { answeredWord, ISprintState } from "./types";

const initialState: ISprintState = {
  isSprintRunning: false,
  isGameOver: false,
  currentPlayedCollection: null,
  currentWordIndex: 0,
  pickedGroup: null,
  answeredWords: [],
};

export const sprintSlice = createSlice({
  name: 'sprint',
  initialState,
  reducers: {
    setIsSprintRunning(state, action: PayloadAction<boolean>) {
      state.isSprintRunning = action.payload;
    },
    setIsGameOver(state, action: PayloadAction<boolean>) {
      state.isGameOver = action.payload;
    },
    setCurrentPlayedCollection(state, action: PayloadAction<IWord[]>) {
      state.currentPlayedCollection = action.payload;
    },
    setPickedGroup(state, action: PayloadAction<null | number>) {
      state.pickedGroup = action.payload;
    },
    setCurrentWordIndex(state, action: PayloadAction<number>) {
      state.currentWordIndex = action.payload;
    },
    setAnsweredWords(state, action: PayloadAction<answeredWord>) {
      state.answeredWords.push(action.payload);
    },
  },
});

export const {
  setIsSprintRunning,
  setIsGameOver,
  setCurrentPlayedCollection,
  setPickedGroup,
  setCurrentWordIndex,
  setAnsweredWords,
} = sprintSlice.actions;

export default sprintSlice.reducer;