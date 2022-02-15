import { FC, useEffect } from "react";
import { useTypedDispatch } from "redux/hooks";
import { fetchAllWords } from "redux/thunks";
import SprintGame from "./components/SprintGame";
import SprintHeader from "./components/SprintHeader";
import { Wrapper } from "./Sprint.styled";

const Sprint: FC = () => {
  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(fetchAllWords());
  }, []);

  return (
    <Wrapper>
      <SprintHeader />
      <SprintGame />
    </Wrapper>
  )
};


export default Sprint;

