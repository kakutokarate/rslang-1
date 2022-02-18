import { FC, useEffect, useState } from "react"
import { setAnsweredWords, setCurrentCorrectAnswersSeries, setCurrentWordIndex, setLastBestSeries } from "redux/features/sprintSlice";
import { useTypedDispatch, useTypedSelector } from "redux/hooks";
import Timer from "../Timer";
import { Button, Wrapper } from "./Game.styled"
import usePrepareDataForAnswer from "./hooks/usePrepareDataForAnswer";
import correctSound from 'assets/sounds/correct_answer.wav';
import wrongSound from 'assets/sounds/wrong_answer.wav';

const Game: FC = () => {
  const [isBtnsActive, setIsBtnsActive] = useState(true);
  const [currentWord, translation, enWord] = usePrepareDataForAnswer();
  const dispatch = useTypedDispatch();
  const {
    currentWordIndex,
    answeredWords,
    currentCorrectAnswersSeries,
    lastBestSeries,
  } = useTypedSelector(state => state.sprint);

  const audioCorrect = new Audio(correctSound);
  const audioWrong = new Audio(wrongSound);

  function falseAnswer() {
    audioWrong.play();
    if (currentCorrectAnswersSeries > lastBestSeries) {
      dispatch(setLastBestSeries(currentCorrectAnswersSeries));
    }
    dispatch(setCurrentCorrectAnswersSeries(0));
    console.log(
      {
        word: enWord,
        answerResult: false,
        translation,
        currentWord,
      }
    )
    dispatch(setAnsweredWords({
      word: enWord,
      answerResult: false,
      translation,
      currentWord,
    }));
  }

  function clickHandler(answer: boolean) {
    if (isBtnsActive) {
      setIsBtnsActive(false);

      const result = currentWord === translation;

      if (result === answer) {
        console.log(
          {
            word: enWord,
            answerResult: false,
            translation,
            currentWord,
          }
        )
        audioCorrect.play();
        dispatch(setCurrentCorrectAnswersSeries(currentCorrectAnswersSeries + 1));
        dispatch(setAnsweredWords({
          word: enWord,
          answerResult: true,
          translation,
          currentWord,
        }));

      } else {
        falseAnswer();
      }
      dispatch(setCurrentWordIndex(currentWordIndex + 1));
      setTimeout(() => setIsBtnsActive(true), 500);

    }
  }

  function skipHandler() {
    if (isBtnsActive) {
      setIsBtnsActive(false);

      falseAnswer();
      dispatch(setCurrentWordIndex(currentWordIndex + 1));

    }
    setTimeout(() => setIsBtnsActive(true), 500);
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'ArrowLeft') clickHandler(false);
      if (e.code === 'ArrowRight') clickHandler(true);
      if (e.code === 'ArrowUp') skipHandler();
      if (e.code === 'ArrowDown') skipHandler();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [answeredWords, isBtnsActive, currentWordIndex, clickHandler, skipHandler]);

  return (
    <Wrapper>
      <Timer />
      <div>
        <div>{enWord}</div>
        <div>{currentWord}</div>
      </div>
      <div>
        <Button
          onClick={() => clickHandler(false)}

        >
          Нет
        </Button>
        <Button
          onClick={skipHandler}
        >
          Не знаю
        </Button>
        <Button
          onClick={() => clickHandler(true)}

        >
          Да
        </Button>
      </div>
    </Wrapper>
  );
};

export default Game;