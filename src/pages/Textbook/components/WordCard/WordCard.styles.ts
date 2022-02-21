import { IUserWord } from 'model/IUserWord';
import styled from 'styled-components';

export const StyledWordCard = styled.div<{ background?: IUserWord | undefined }>`
  width: 450px;
  padding-bottom: 20px;
  margin-bottom: 15px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  background-color: ${({ background }) =>
    background?.difficulty === 'difficult'
      ? '#ffa1a1'
      : background?.difficulty === "easy" &&
        background.optional.counter >= 3
      ? '#bef7be'
      : '#dbdbdb'};

  @media (max-width: 475px) {
    width: 400px;
  }
`;