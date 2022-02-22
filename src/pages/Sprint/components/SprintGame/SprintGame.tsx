import { FC } from "react";
import { useTypedSelector } from "redux/hooks";
import Game from "./components/Game";
import GameOver from "./components/GameOver";
import Intro from "./components/Intro";
import { Wrapper } from "./SprintGame.styled";

const SprintGame: FC = () => {
  const {
    isSprintRunning,
    isGameOver,
    isStartedFromTextbook
  } = useTypedSelector(state => state.sprint);

  if (isGameOver) {
    return (
      <Wrapper>
        <GameOver />
      </Wrapper>
    )
  } {
    return (
      <Wrapper>
        {isSprintRunning && !isStartedFromTextbook && <Game />}
        {!isSprintRunning && !isStartedFromTextbook && <Intro />}
        {isSprintRunning && isStartedFromTextbook && <Game />}
      </Wrapper>
    );
  }

};

export default SprintGame;