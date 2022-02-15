import { FC } from "react"
import { setAnsweredWords, setCurrentWordIndex } from "redux/features/sprintSlice";
import { useTypedDispatch, useTypedSelector } from "redux/hooks";
import { getRandomValueFromArray } from "shared/utils";
import Timer from "../Timer";
import { Button, Wrapper } from "./Game.styled"

const Game: FC = () => {
  const dispatch = useTypedDispatch();
  const {
    currentPlayedCollection,
    currentWordIndex,
    answeredWords
  } = useTypedSelector(state => state.sprint);
  const randomWord = currentPlayedCollection && getRandomValueFromArray(currentPlayedCollection);
  const enWord = currentPlayedCollection && currentPlayedCollection[currentWordIndex].word;
  const ruWord = randomWord && randomWord
    .wordTranslate
    .toLowerCase();
  const translation = currentPlayedCollection && currentPlayedCollection[currentWordIndex]
    .wordTranslate
    .toLowerCase();
  const currentWord = Math.random() > 0.5 ? ruWord : translation;

  function clickHandler(arg: boolean) {
    dispatch(setCurrentWordIndex(currentWordIndex + 1));
    const result = currentWord === translation;
    if (result === arg) {
      dispatch(setAnsweredWords({
        [enWord!]: {
          answerResult: result,
          translation,
          currentWord,
        }
      }));
    } else {
      dispatch(setAnsweredWords({
        [enWord!]: {
          answerResult: result,
          translation,
          currentWord,
        }
      }));
    }
    console.log(answeredWords);
  }



  return (
    <Wrapper>
      <Timer />
      <div>
        <div>{enWord}</div>
        <div>{currentWord}</div>
      </div>
      <div>
        <Button
          onClick={() => clickHandler(true)}
        >Да</Button>
        <Button
          onClick={() => clickHandler(false)}
        >Нет</Button>
      </div>
    </Wrapper>
  );
};

export default Game;