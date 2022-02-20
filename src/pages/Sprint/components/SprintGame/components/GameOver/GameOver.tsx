import { FC, useEffect } from "react";
import { clearAnsweredWords, setIsGameOver, setCurrentCorrectAnswersSeries, setLastBestSeries, setCurrentWordIndex } from "redux/features/sprintSlice";
import { useTypedDispatch, useTypedSelector } from "redux/hooks";
import { Wrapper } from "./GameOver.styled";
import usePrepareGameOverResults from "./hooks/usePrepareGameOverResults";
import { IPrepareGameOver } from "./types";
import { getAudio } from "./utils";
import { getWordsId } from "./utils/getWordsId";
import { updateLocalStatistic, updateUserWordData } from 'shared/utils';
import { SPRINT } from "shared/utils/constants";
import { prepareNewStatistic } from "redux/features/statisticSlice/utils";
import { IStatistic } from "model/IStatistic";
import { IUserWord } from "model/IUserWord";
import { postUserWord, sendStatistic, updateUserWord } from "redux/thunks";
import { IWord } from "model/IWord";

const GameOver: FC = () => {
  const dispatch = useTypedDispatch();
  const {
    currentPlayedCollection,
    lastBestSeries,
    currentCorrectAnswersSeries,
  } = useTypedSelector(state => state.sprint);
  const prevStatistic = useTypedSelector(state => state.statistic.statisticData);
  const allWords = useTypedSelector(state => state.words.allWords);
  const {
    correctAnswersPercentage,
    answersBeenGiven,
    correctWords,
    wrongWords,
  }: IPrepareGameOver = usePrepareGameOverResults();

  function clickHandler() {
    dispatch(setIsGameOver(false));
    dispatch(clearAnsweredWords());
    dispatch(setCurrentCorrectAnswersSeries(0));
    dispatch(setCurrentWordIndex(0));
    dispatch(setLastBestSeries(0));
  }

  useEffect(() => {
    if (currentCorrectAnswersSeries > lastBestSeries) {
      dispatch(setLastBestSeries(currentCorrectAnswersSeries));
    }

  }, [currentCorrectAnswersSeries, lastBestSeries]);

  useEffect(() => {
    const correctAnswersIds = getWordsId(correctWords) as string[];
    const wrongAnswersIds = getWordsId(wrongWords) as string[];
    const authData = localStorage.getItem('authUserData-zm');

    if (authData) {
      const userData = JSON.parse(authData);
      const userId = userData.userId;
      const correctIWords: Array<IWord> = [];
      const wrongIWords: Array<IWord> = [];

      correctAnswersIds.forEach(el => {
        correctIWords.push(allWords.find(item => item._id === el)!);
      });
      wrongAnswersIds.forEach(el => {
        wrongIWords.push(allWords.find(item => item._id === el)!);
      });

      updateLocalStatistic(
        correctAnswersIds,
        wrongAnswersIds,
        SPRINT,
        lastBestSeries,
        userId,
      );

      const newStatistic = prepareNewStatistic(prevStatistic, [...correctAnswersIds, ...wrongAnswersIds]) as IStatistic;
      dispatch(sendStatistic({ userData, newStatistic }));
      correctIWords.forEach((el) => {

        const newUserWord = updateUserWordData(el, true, SPRINT) as IUserWord;
        !('userWord' in el)
          ? dispatch(postUserWord({ newUserWord, userData }))
          : dispatch(updateUserWord({ newUserWord, userData }));
      });

      wrongIWords.forEach((el) => {
        const newUserWord = updateUserWordData(el, false, SPRINT) as IUserWord;
        !('userWord' in el)
          ? dispatch(postUserWord({ newUserWord, userData }))
          : dispatch(updateUserWord({ newUserWord, userData }));

      });
    } else {
      updateLocalStatistic(
        correctAnswersIds,
        wrongAnswersIds,
        SPRINT,
        lastBestSeries,
      );
    }
  }, [lastBestSeries, correctWords, wrongWords, currentPlayedCollection]);

  return (
    <Wrapper>
      <h1>Game Over!</h1>
      <h2>Вы ответили правильно на {answersBeenGiven ? correctAnswersPercentage : 0}%</h2>
      <h2>Лучшая серия ответов: {lastBestSeries}</h2>
      <div>
        <h3>Правильно:</h3>
        {correctWords.map((word, idx) => {
          const audio = getAudio(currentPlayedCollection, word);

          return (
            <div
              key={idx}
              onClick={() => audio.play()}
            >
              {word.word} - {word.currentWord}
            </div>
          )
        })}
      </div>
      <div>------------------------------------</div>
      <div>
        <h3>Неправильно:</h3>
        {wrongWords.map((word, idx) => {
          const audio = getAudio(currentPlayedCollection, word);

          return (
            <div
              key={idx}
              onClick={() => audio.play()}
            >
              {word.word} - {word.currentWord} ({word.translation})
            </div>
          )
        })}
      </div>
      <button
        onClick={clickHandler}
      >
        Начать Заного!
      </button>
    </Wrapper>
  );
};

export default GameOver;