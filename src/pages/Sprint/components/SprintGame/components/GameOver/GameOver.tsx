import { FC, useEffect } from "react";
import { clearAnsweredWords, setIsGameOver, setCurrentCorrectAnswersSeries, setLastBestSeries, setCurrentWordIndex } from "redux/features/sprintSlice";
import { useTypedDispatch, useTypedSelector } from "redux/hooks";
import { Wrapper } from "./GameOver.styled";
import usePrepareGameOverResults from "./hooks/usePrepareGameOverResults";
import { IPrepareGameOver } from "./types";
import { getAudio } from "./utils";

const GameOver: FC = () => {
  const dispatch = useTypedDispatch();
  const {
    currentPlayedCollection,
    lastBestSeries,
    currentCorrectAnswersSeries,
  } = useTypedSelector(state => state.sprint);
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