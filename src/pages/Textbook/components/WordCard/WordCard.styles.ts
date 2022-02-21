import { IUserWord } from 'model/IUserWord';
import styled from 'styled-components';

export const StyledWordCard = styled.div<{ background?: IUserWord | undefined }>`
  width: 450px;
  /* padding: 0px 0px; */
  margin-bottom: 15px;
  box-shadow: 0px 0px 5px #000;
  border-radius: 5px;
  display: flex;
  /* row-gap: 15px; */
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  background-color: ${({ background }) =>
    background?.difficulty === 'difficult'
      ? 'tomato'
      : background?.difficulty === "easy" &&
        background.optional.counter >= 3
      ? 'lightgreen'
      : '#d7d7d7'};
`;