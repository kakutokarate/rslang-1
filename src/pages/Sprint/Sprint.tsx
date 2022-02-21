import { FC, useEffect } from "react";
import { clearAnsweredWords, setCurrentCorrectAnswersSeries, setCurrentWordIndex, setIsGameOver, setLastBestSeries } from "redux/features/sprintSlice";
import { useTypedDispatch } from "redux/hooks";
import { fetchAllWords } from "redux/thunks";
import SprintGame from "./components/SprintGame";
import SprintHeader from "./components/SprintHeader";
import { Wrapper } from "./Sprint.styled";

const Sprint: FC = () => {
  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(fetchAllWords());
    dispatch(setIsGameOver(false));
    dispatch(clearAnsweredWords());
    dispatch(setCurrentCorrectAnswersSeries(0));
    dispatch(setCurrentWordIndex(0));
    dispatch(setLastBestSeries(0));
  }, []);

  return (
    <Wrapper>
      <SprintHeader />
      <SprintGame />
    </Wrapper>
  )
};


export default Sprint;

