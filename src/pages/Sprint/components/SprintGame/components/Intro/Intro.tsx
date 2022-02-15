import { FC } from "react";
import Launch from "../Launch";
import { Wrapper } from "./Intro.styled";

const Intro: FC = () => {
  return (
    <Wrapper>
      <h1>Спринт</h1>
      <h2>Угадай как можно больше слов за 30 секунд</h2>
      <Launch />
    </Wrapper>
  )
}

export default Intro;