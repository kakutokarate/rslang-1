import { FC } from "react";
import { setIsGameOver } from "redux/features/sprintSlice";
import { useTypedDispatch, useTypedSelector } from "redux/hooks";
import Game from "./components/Game";
import Intro from "./components/Intro";
import { Wrapper } from "./SprintGame.styled";

const SprintGame: FC = () => {
  const dispatch = useTypedDispatch();
  const { isSprintRunning, isGameOver } = useTypedSelector(state => state.sprint);

  if (isGameOver) {
    return (
      <Wrapper>
        <h1>Game Over!</h1>
        <button
          onClick={() => dispatch(setIsGameOver(false))}
        >Начать Заного!</button>
      </Wrapper>
    )
  } {
    return (
      <Wrapper>
        {isSprintRunning
          ? <Game />
          : <Intro />
        }
      </Wrapper>
    );
  }

};

export default SprintGame;